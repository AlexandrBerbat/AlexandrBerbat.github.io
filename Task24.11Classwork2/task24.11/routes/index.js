var express = require('express');
var router = express.Router();
var axios = require('axios').default;

const REGIONS = [];

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





/* GET home page. */
router.get('/:region', function (req, res, next) {

  let tempRegions = [];

  axios.get(`https://restcountries.eu/rest/v2/all?fields=region`)
    .then((res1) => {
      tempRegions = res1.data;
      tempRegions = searchUnicRegions(tempRegions);
    })

  let regionGet = req.params.region;

  axios.get(`https://restcountries.eu/rest/v2/region/${regionGet}`)
    .then((res2) => {
      let tempData = res2.data;

      let cardsArr = tempData.map((item) => {
        return {
          'flag': item.flag,
          'country_name': item.name,
          'capital': item.capital,
          'region': item.region,
          'population': item.population
        }
      })

      res.render('index', { countries: cardsArr , regions: tempRegions});
    })
});

module.exports = router;
