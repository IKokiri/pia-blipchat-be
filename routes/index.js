var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require("mongodb").MongoClient;
const DATABASE_NAME = "piablipchat";
const CONNECTION_URL = "mongodb+srv://luizmendes:Pass1234@cluster0-c1rpf.mongodb.net/"+DATABASE_NAME+"?retryWrites=true&w=majority";


var express = require('express')
var cors = require('cors')
var app = express()


const corsOptions = {
  origin: 'http://localhost:3001'
}
/* GET home page. */
// router.get('/',cors(),function(req, res, next) {
  router.get('/',function(req, res, next) {
  
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  
MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
  
  if(error) {
      throw error;
  }

  database = client.db(DATABASE_NAME);

  database.collection("custom").find({}).limit(5).toArray(function(err, result) {
    if (err) throw err;
    
    res.json(result)
  });

});

});

/* POST home page. */
// router.post('/',cors(corsOptions), function(req, res, next) {
  router.post('/:withstyle/:withbutton',cors(corsOptions), function(req, res, next) {
  
  MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    
    if(error) {
        throw error;
    }
  
    database = client.db(DATABASE_NAME);

    var myobj = {
      "ws":req.params.withstyle.replace(/@@/g, "#"),
      "wb":req.params.withbutton.replace(/@@/g, "/"),
    };
  
    database.collection("custom").insertOne(myobj, function(err, res) {
      if (err) throw err;
    });

    res.send("{'status':'ok'}")
  
  });
  
  });
module.exports = router;
