const axios = require(`axios`);


const url = 'https://api.thecatapi.com/v1/breeds'
let result = [];

const axiosTest = axios.get

axiosTest(url).then(function (axiosTestResult) {
    console.time();//////////////////////////////////////////////console.time()
    result = axiosTestResult.data.map((item) => {
        return {
            'breed_id': item.id,
            'name': item.name
        }
    })
}).then(() => {
    return getImgToEachBreed(result);
})

async function getImgToEachBreed(allBreedsArr) {

    let promises = [];

    allBreedsArr.forEach((item) => {
        promises.push(axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${item.breed_id}`)
            .then((res) => {
                return {
                    'name': res.data[0].breeds[0].name,
                    'url': res.data[0].url
                };
            })
            .catch((err) => {
                console.log(`Error: ${err}`);
            }));
    });

    return Promise.all(promises)
        .then(values => {
            return values;
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .then((values) => {
            console.log(values);
            console.timeEnd();////////////////////////////////////////////////////////console.timeEnd()
        })
}

