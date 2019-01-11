
const http = require('http');

const port=process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

// var http = require("http");
// var express = require('express');
// const path = require('path');
// var app = express();
// var mysql      = require('mysql');
// var bodyParser = require('body-parser');
// var url = require('url'); 
// var querystring = require('querystring');

// var prt = process.env.PORT || 3000;
// process.env.NODE_ENV = 'production';
// var server = app.listen(prt, function () {
//    var host = server.address().address
//    var port = server.address().port   
//    console.log("Example app listening at http://%s:%s", host, port)
// })

// app.use( bodyParser.json() );       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, Access-Control-Allow-Headers, X-Requested-With, Content-Type, Accept, x-access-token");
//   next();
// });


// app.use(express.static(path.resolve(__dirname,'./react_spa/build')));

// app.get('*',function(req, res){
//   res.sendFile(path.resolve(__dirname,'./react_spa/build','index.html'));
// });

