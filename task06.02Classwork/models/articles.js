const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { salt } = require('../config/db');

const generalSchema = require('../models/schemas/articles');

generalSchema.statics.showArticle = async function (articleID) {
    return this.findOne({_id: articleID})
    .populate('owner', 'name')
    .populate('editors', 'name')
    .then(r => {
        return r;
    })
    .catch(err => {
        console.log(err);
        return `Error ${err}`;
    })
}

generalSchema.statics.showAllArticles = async function (articleOwnerID) {
    return this.find({owner: articleOwnerID})
    .populate('owner', 'name')
    .populate('editors', 'name')
    .then(r => {
        // console.log(r);
        return r;
    })
    .catch(err => {
        console.log(err);
        return `Error ${err}`;
    })
}

const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema);
module.exports = model;