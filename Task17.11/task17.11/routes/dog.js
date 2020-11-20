var express = require('express');
var router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/:breed', function (req, res, next) {

    const page = { breed: "", src: "" };

    let Breed = req.params.breed;
    axios.get(`https://dog.ceo/api/breed/${Breed}/images/random`)
        .then((res) => {
            let tempDog = res.data;
            if (tempDog.status == "success") {
                page.breed = Breed;
                page.src = `<img src="${tempDog.message}">`;
            }
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
        .then(() => {
            res.render(`index`, page);
        })

});

module.exports = router;





