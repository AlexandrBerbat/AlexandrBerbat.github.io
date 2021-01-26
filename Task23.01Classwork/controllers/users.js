const { response } = require('express');
const Users = require('../models/users');

showAllUsers = async (req, res) => {
  // to db find all  -> names, ids
  // ...
  // -> arr=  [{ name: 'Alex', _id: 1}, { name: 'Peter', _id: 2}, {name: 'Voldemar', _id: 3}]
  // ... 
  res.render(index, arr); 
  // a href=/params/1 - change params Alex
  // a href=/marks/2  - add marks Peter
};

showUserParamsForm = async (req, res) => {
  // -> req.params.id
  // -> get user by id from db
  // ...
  res.render('userparams', obj) // obj = { name: 'Alex', _id: 1, height: 11, weight: 22 } // inputs x 3
};

updateUserParams = async (req, res) => {
  // req.body -> { id: 1, height: 12, weight: 23 }
  // update db by id
  Users.findByIdAndUpdate(1, {
    parameters: {
      height: 12,
      weight: 23, 
      date: Date.now(),
    }
  })
  // -> respond from db
  // -> handlerRespond: ok -> 'done', err-> 'some error',
  res.send(response);
}

showFormAddMark =  async (req, res) => {
  // -> req.params.id
  // -> get user by id from db
  // ...
  res.render('addmark', obj) // { name: 'Alex', _id: 1, subjects: ['matem', 'literature'] }
}

addMark = async (req, res) => {
  // req.body -> { id: 1, subject: 'matem', mark: 5}
  // add record to db (push to arr)

  // let user = await Users.findById(1);
  // user.subject.['matem'].push(5);
  // let response = await user.save();
  
  // -> respond from db
  // -> handlerRespond: ok -> 'done', err-> 'some error',
  res.send(response);
}

testMiddleWare = async (req, res) => {

  res.send("ALL OK");
}


module.exports = {
  showAllUsers,
  showUserParamsForm,
  updateUserParams,
  showFormAddMark,
  addMark,
  testMiddleWare,
}