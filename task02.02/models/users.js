const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const crypto = require('crypto');
const { salt } = require('../config/db');

const generalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    surname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    login: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    password: {
        type: String
    },
    mail: [{
        type: String,
        required: false,
        default: 'no_mail',
        minlength: 0,
        maxlength: 255,
    }],
    telephone: [{
        type: String,
        required: false,
        minlength: 5,
        maxlength: 15,
    }],
    dateBirthday: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 15,
    },
    sex: {
        type: String,
        required: false,
        enum: ["Boy", "Girl"]
    },
    parameters: {
        height: {
            type: Number,
            required: false,
        },
        weight: {
            type: Number,
            required: false,
        },
        dateOfMeasure: {
            type: Date,
            required: false
        }
    },
    subjects: {
        mathematics: [{
            mark: {
                type: Number,
                required: false,
                min: 1,
                max: 5
            },
            date: {
                type: String,
                required: false
            }
        }],
        literature: [{
            mark: {
                type: Number,
                required: false,
                min: 1,
                max: 5
            },
            date: {
                type: String,
                required: false
            }
        }]
    },
    address: {
        index: {
            type: Number,
            required: false,
            min: 1,
            max: 20,
        },
        country: {
            type: String,
            required: false,
            minLength: 0,
            maxLength: 255
        },
        city: {
            type: String,
            required: false,
            minLength: 0,
            maxLength: 255
        },
        street: {
            type: String,
            required: false,
            minLength: 0,
            maxLength: 255
        },
        house: {
            type: String,
            required: false,
            minLength: 0,
            maxLength: 255
        },
        flat: {
            type: String,
            required: false,
            minLength: 0,
            maxLength: 255
        }
    }

}, { timestamps: true });

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