const path = require('path');
const mongoose = require('mongoose');
const generalSchema = require('./schemas/users');

// const generalSchema = new Schema({
//   name: {
//     type: Schema.Types.String,
//     required: true,
//     minLength: 1,
//     maxLength: 100,
//   },
//   surname: {
//     type: Schema.Types.String,
//     required: true,
//     minLength: 1,
//     maxLength: 100,
//   },
//   login: {
//     type: Schema.Types.String,
//     required: true,
//     minLength: 1,
//     maxLength: 100,
//   },
//   password: {
//     type: Schema.Types.String,
//     required: true,
//   },
//   mail: [
//     {
//       type: Schema.Types.String,
//       required: false,
//       default: 'no_email',
//       minLength: 0,
//       maxLength: 255,
//     }
//   ],
//   telephone: [
//     {
//       type: Schema.Types.String,
//       required: true, 
//       minLength: 5,
//       maxLength: 15,
//     }
//   ],
//   dateBirthday: {
//     type: Schema.Types.String,
//     required: true, 
//     minLength: 5,
//     maxLength: 15,
//   },
//   sex: {
//     type: Schema.Types.String,
//     required: true, 
//     enum: ['Boy', 'Girl'],
//   },
//   parameters: {
//     height: {
//       type: Schema.Types.Number,
//       required: true, 
//     },
//     weight: {
//       type: Schema.Types.Number,
//       required: true, 
//     },
//     dateOfMeasure: {
//       type: Schema.Types.Date,
//       required: false,
//     },
//   },
//   subjects: {
//     mathematics: [
//       {
//         mark: {
//           type: Schema.Types.Number,
//           required: false,
//           min: 1,
//           max: 5,
//         },
//         date: {
//           type: Schema.Types.String,
//           required: false,
//         }
//       }
//     ],
//     literature: [
//       {
//         mark: {
//           type: Schema.Types.Number,
//           required: false,
//           min: 1,
//           max: 5,
//         },
//         date: {
//           type: Schema.Types.String,
//           required: false,
//        }
//       }
//     ]
//   },
//   address: {
//     index: {
//       type: Schema.Types.Number,
//       required: false,
//       min: 1,
//       max: 20,
//     },
//     country: {
//       type: Schema.Types.String,
//       required: false,
//       minLength: 0,
//       maxLength: 255,
//     },
//     city: {
//       type: Schema.Types.String,
//       required: true,
//       minLength: 0,
//       maxLength: 255,
//     },
//     street: {
//       type: Schema.Types.String,
//       required: true,
//       minLength: 0,
//       maxLength: 255,
//     },
//     house: {
//       type: Schema.Types.String,
//       required: true,
//       minLength: 0,
//       maxLength: 255,
//     },
//     flat: {
//       type: Schema.Types.String,
//       required: true,
//       minLength: 0,
//       maxLength: 255,
//     }
//   }

// }, { timestamps: true });





const modelname = path.basename(__filename, '.js'); // Название модели совпадает с названием файла модели. Тут мы получаем имя файла без расширения .js
const model = mongoose.model(modelname, generalSchema); // собственно создаем модель
module.exports = model;