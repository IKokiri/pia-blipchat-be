var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const DATABASE_NAME = "piablipchat";
const CONNECTION_URL = "mongodb+srv://luizmendes:Pass1234@cluster0-c1rpf.mongodb.net/"+DATABASE_NAME+"?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
var c
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
  if(error) {
      throw error;
  }
  database = client.db(DATABASE_NAME);
  collection = database.collection("custom");



  database.collection("custom").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });

  // console.log(a.ReadableState);
  // res.send(a.ReadableState)
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
