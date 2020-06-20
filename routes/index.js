var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const DATABASE_NAME = "piablipchat";
const CONNECTION_URL = "mongodb+srv://luizmendes:Pass1234@cluster0-c1rpf.mongodb.net/"+DATABASE_NAME+"?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
  
  if(error) {
      throw error;
  }

  database = client.db(DATABASE_NAME);
  collection = database.collection("custom");
  
  var myobj = {"header":"header1","send":"send1","received":"received1","background":"background1","icon":"icon1"};

  database.collection("custom").insertOne(myobj, function(err, res) {
    if (err) throw err;
  });

  database.collection("custom").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });

});





// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var query = { address: "Park Lane 38" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
  // });
// });

});

module.exports = router;
