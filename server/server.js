var http = require('http');
var https = require('https');

var express = require('express');
var config = require('./config.js');
require('express-namespace');

var app = express();
var server = http.createServer(app);

require('./lib/routes/static').addRoutes(app, config);

app.use(express.logger());                                  // Log requests to the console

// A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// Start up the server on the port specified in the config
server.listen(config.server.listenPort, '0.0.0.0', 511, function() {
  // // Once the server is listening we automatically open up a browser
  var open = require('open');
  open('http://localhost:' + config.server.listenPort + '/');
});
console.log('Angular App Server - listening on port: ' + config.server.listenPort);
