const express = require('express');
const router = express.Router();
const multer = require('multer');
let upload = multer();
const modelUsers = require('../models/users');
const modelTakeJson = require('../models/takeJson');
const mongoClient = require('../models/testuser');




router.get('/user/:id', async (req, res, next) => {
  const user = await modelUsers.get(req.params.id);
  res.render('index', user);
});

router.get('/', (req, res, next) => {

  user = modelTakeJson;

///////////////////////////////////////////// добавляем данные с json файла которые берем в /models/takeJson
//   mongoClient.connect(function(err, client){
      
//     const db = client.db("testdb");
//     const collection = db.collection("users");
     
//     collection.insertOne(user, function(err, results){
              
//         console.log(results);
//         client.close();
//     });
// });

////////////////////////////////////////////// выводим в res.send() данные из бд testdb и коллекции users
mongoClient.connect(function(err, client){
      
  const db = client.db("testdb");
  const collection = db.collection("users");

  if(err) return console.log(err);
    
  collection.find().toArray(function(err, results){
               
      console.log(results);
      res.send(results);
      client.close();
  });
});

});

router.post('/', upload.none(), async (req, res) => {
  const result = await modelUsers.add(req.body);
  console.log('result:', result);
  if (result.affectedRows === 1) {
    res.send('done.');
  }
});

module.exports = router;