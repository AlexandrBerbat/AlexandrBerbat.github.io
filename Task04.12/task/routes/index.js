var express = require('express');
var router = express.Router();
var axios = require(`axios`);

/* GET home page. */
router.get('/', function (req, res, next) {

  axios.get(`https://dou.ua/`)
    .then((res) => {

      let data = res.data;
      let reg = /src=.+(\.png|\.jpg)/gi;
      let out = data.match(reg);

      out = out.map(item => {
        item = item.slice(5);
        let temp = item.split("\"");
        item = temp[0];
        return `${item}`
      })
      
      console.log(out);
    })


  res.render('index', { title: 'Express' });
});

module.exports = router;
