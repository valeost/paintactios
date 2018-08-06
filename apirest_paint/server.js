const express = require('express');
const fs = require('fs');
const app = express();

// GET http://localhost:8081/api/datasource
app.get('/api/datasource', function (req, res) {
    fs.readFile( __dirname + "/api/" + "datasource.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });
 })
 // GET http://localhost:8081/api/population
 app.get('/api/population', function (req, res) {
    fs.readFile( __dirname + "/api/" + "info-population.json", 'utf8', function (err, data) {
        console.log( data);
        res.end( data );
    });
 }) 
 var server = app.listen(8081, function () {
 
   var host = server.address().address
   var port = server.address().port
 
   console.log("Listening at http://%s:%s", host, port)
 
 })