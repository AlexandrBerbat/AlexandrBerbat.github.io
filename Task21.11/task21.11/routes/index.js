var express = require('express');
var router = express.Router();
const axios = require('axios').default;

let pageG = { filmArr: [], sendStr: `<option value = "">Выберите Фильм</option>`, actorsList: "" };



/* GET home page. */
router.get('/', function (req, res, next) {
  // const page = { filmArr: [], sendStr: `<option value = "">Выберите Фильм</option>`, actorsList: "" };

  pageG.actorsList = "";
  axios.get(`https://swapi.dev/api/films/`)
    .then((res) => {
      // console.log(res.data)
      let tempData = res.data;
      tempData.results.forEach((item) => {
        pageG.filmArr.push(item.title);

      });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then(() => {
      pageG.filmArr.forEach((item) => {
        pageG.sendStr += `<option class = "${item}" value = "${item}">${item}</option>`;

      });
      // console.log(page.sendStr);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);

    })
    .then(() => {

      // pageG = page;
      res.render(`index`, pageG);
    });
});

router.get("/:filmName", function (req, res, next) {
  // console.log(req.params.filmName);
  let filmNameParam = req.params.filmName;
  // console.log(`filmNameParam ${filmNameParam}`);

  let charactersList = [];



  axios.get(`https://swapi.dev/api/films/`)
    .then((res) => {
      // console.log(res.data)
      let tempData = res.data;
      // tempData.results.forEach((item) => {
      //   page.filmArr.push(item.title);

      // });
      tempData.results.forEach((item) => {
        if (item.title == filmNameParam) {
          charactersList = item.characters;

          // pageG.actorsList = "";


          charactersList.forEach((item) => {
            axios.get(`${item}`)
              .then((res2) => {
                let tempCharacter = res2.data.name;

                pageG.actorsList += `<li>${tempCharacter}</li>`;

              })
              .catch((err) => {
                console.log(`Error: ${err}`);
              })
              .then(() => {
                
              })

          })
          console.log(pageG.actorsList);
        }
      });


    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
    .then(() => {

      
      res.render(`index`, pageG);
    });


});

module.exports = router;
