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

  database.collection("custom").find({}).toArray(function(err, result) {
    if (err) throw err;
    
    res.json(result)
  });

});

});

/* POST home page. */
router.post('/', function(req, res, next) {

  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    
    if(error) {
        throw error;
    }
  
    database = client.db(DATABASE_NAME);
    
    var myobj = {
      "header":req.body.header,
      "send":req.body.send,
      "received":req.body.received,
      "background":req.body.background,
      "icon":req.body.icon
    };
  
    database.collection("custom").insertOne(myobj, function(err, res) {
      if (err) throw err;
    });

    res.send("criado")
  
  });
  
  });
module.exports = router;
