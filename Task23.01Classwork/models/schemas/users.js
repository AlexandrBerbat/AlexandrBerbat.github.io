const mongoose = require('mongoose');
const { Schema } = mongoose; 

module.exports = new Schema({
  name: {
    type: Schema.Types.String,
    default: 'no_title',
    minLength: 0,
    maxLength: 255,
  },
  author: {
    fullname: {
      type: Schema.Types.String,
      required: true, 
      minLength: 0,
      maxLength: 255,
    },
    tel: [
      {
        type: Schema.Types.String,
        required: false, 
        minLength: 5,
        maxLength: 15,
      }
    ],
  }, 
  text: {
    type: Schema.Types.String,
    required: true, 
    minLength: 0,
    maxLength: 1024,
  },
  tags: [
    {
      type: Schema.Types.Number,
      required: false,
      default: 1, 
      min: 1,
      max: 99,
    }
  ],
}, { timestamps: true });

