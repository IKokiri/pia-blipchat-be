var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('get request');
});

app.post('/', function(req, res) {
    res.send('post request');
});

app.listen(process.env.PORT || 5000, function () {
    console.log("ds");
});