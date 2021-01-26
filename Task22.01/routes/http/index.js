const express = require('express');
const router = express.Router();
const users = require('../../controllers/users');


// const articleController = require('controllers/article')

// const Ajv = require('ajv');
// const testSchema = require('routes/schemas/test');

router.get('/', (req,res) => {
    let temp = users.showAllUsers;
    console.log(temp);
    res.render("index", temp);
});

module.exports = router;
