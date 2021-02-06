const mongoose = require('mongoose');
const { Schema } = mongoose; 

module.exports = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    editors: [{
        type: Schema.Types.ObjectId,
        ref: 'users',
    }],
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
}, { timestamps: true });