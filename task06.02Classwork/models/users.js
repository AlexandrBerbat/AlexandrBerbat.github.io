const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { salt } = require('../config/db');

const generalSchema = require('../models/schemas/users');

generalSchema.statics.checkUser = async function (login, pass) {


    const userName = await this.findOne({ login: login });

    if (!userName) {
        return false;
    }

    const currHash = crypto.createHmac('sha256', pass)
        .update(salt)
        .digest('hex');
    return currHash === userName.password ? true : false;
}

generalSchema.virtual('passw')
    .get(function () { console.log('no data.') })
    .set(function (pass) {
        const currHash = crypto.createHmac('sha256', pass)
            .update(salt)
            .digest('hex');
        const password = currHash;
        this.set({ password });
    })

const modelname = path.basename(__filename, '.js');
const model = mongoose.model(modelname, generalSchema);
module.exports = model;