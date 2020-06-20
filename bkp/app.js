var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('get request21');
});

app.post('/', function(req, res) {
    res.send('post request');
});

app.listen(process.env.PORT || 5000, function () {
    
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://luizmendes:<password>@cluster0-c1rpf.mongodb.net/<dbname>?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    });

});