var express = require('express');
var router = express.Router();
var axios = require('axios').default;

// https://api.thecatapi.com/v1/images/search?breed_ids=BREED - обьект с url на картинку породы

function searchUnicRegions(arr) {
  let result = [];
  let tempResult = arr.map((item => item.region))

  for (let str of tempResult) {
    if (!result.includes(str) && str !== "") {
      result.push(str);
    }
  }

  return result;
}

async function getAllRegions() {

  return await axios.get(`https://restcountries.eu/rest/v2/all?fields=region`)
    .then((res) => {
      return searchUnicRegions(res.data);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
}

async function getCountriesFromRegion(region) {
  return await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
    .then((res) => {
      return res.data = res.data.map((item) => {
        return {
          'country_name': item.name,
          'flag': item.flag
        }
      })
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
}

async function getAllCats() {
  return await axios.get(`https://api.thecatapi.com/v1/breeds`)
    .then((res) => {
      return res.data.map((item) => {
        return {
          'breed_id': item.id,
          'country_origin': item.origin,
          'breed_name': item.name,
        }
      });

    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
}


//??????????????????????????????????????????????????????????????????
async function getImgToEachBreed(allBreedsArr) {
  // console.log(allBreedsArr);
  let promises = [];

  for(let i = 0; i < allBreedsArr.length; i++)
  {
    promises[i] = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${allBreedsArr[i].breed_id}`)
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    
  }

  Promise.all(promises)
  .then(value => {
    value.forEach(item => {
      item.url;
    })
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  })
  .then(()=> {
    console.log(`end`);
  })
}
//?????????????????????????????????????????????????????????????????????



router.get('/:region', function (req, res, next) {
  let regionGet = req.params.region;

  Promise.all([getAllRegions(), getCountriesFromRegion(regionGet), getAllCats()])
    .then((value) => {

      let page = {
        regions: value[0],
        countries: value[1],
        cats: value[2],
      };
      
      // getImgToEachBreed(page.cats)

      return page;
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then(page => {
      res.render(`index`, page);
    })

});

module.exports = router;
