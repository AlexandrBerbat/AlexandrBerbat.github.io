const path = require('path');
const mongoose = require('mongoose');
// const generalSchema = require('./schemas/users');
const { stringify } = require('querystring');
const { Schema } = mongoose;

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
        type: String,
        required: true,
        minlength: 1
    },
    mail: [{
        type: String,
        required: false,
        minlength: 4,
        maxlength: 55,
        match: /\S+@\S+\.\S+/
    }],
    tel: [{
        type: String,
        required: false,
        minlength: 9,
        maxlength: 17,
        match: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    }],
    birthdate: {
        type: Date,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    advancement: {
        math: [{
            mark: {
                type: Number,
                required: true,
                min: 0,
                max: 12
            },
            date: {
                type: Date,
                required: true
            }
        }],
        literature: [{
            mark: {
                type: Number,
                required: true,
                min: 0,
                max: 12
            },
            date: {
                type: Date,
                required: true
            }
        }]
    },
    address: {
        index: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        house: {
            type: String,
            required: true
        },
        flat: {
            type: String,
            required: true
        }
    }

}, { timestamps: true });




const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // собственно создаем модель
module.exports = model;