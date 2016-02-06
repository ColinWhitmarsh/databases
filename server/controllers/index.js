var models = require('../models');
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'chat'
});

dbConnection.connect();



module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {  
      var body = '';
      req.on('data', function(chunk) {
        body += chunk;
      });
      req.on('end', function(){ 
        
      });

     } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

