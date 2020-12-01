var express = require('express');
var router = express.Router();
var axios = require('axios').default;



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
}

router.get('/:region', function (req, res, next) {
  let regionGet = req.params.region;

  Promise.all([getAllRegions(), getCountriesFromRegion(regionGet)])
    .then(values => console.log(values));

  res.send(`123`)
});

module.exports = router;
