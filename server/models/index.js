var db = require('../db');
// var Sequelize = require('sequelize');
// var db = new Sequelize('chat', 'root', 'password');

// var users = db.define('users', {
//   username: Sequelize.STRING
// });

// var messages = db.define('messages', {
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING,
//   user_id: Sequelize.INTEGER
// });

// users.sync();

// messages.sync();

// users.hasMany(messages, { foreignKey: user_id });
// messages.belongsTo(users);
db.dbConnection.connect();

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM messages;', function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(JSON.stringify(results));
        }
      });
    }, // a function which produces all the messages
    // a function which can be used to insert a message into the database
    post: function (message, callback) {
      var text = JSON.stringify(message.message);
      var roomname = JSON.stringify(message.roomname);
      var username = JSON.stringify(message.username);
      var user_id;
      var queryString;

      db.dbConnection.query('SELECT users.id FROM users WHERE users.name =' + username + ';', function(err, results) {
        if (err) {
          throw err;
        } else {
          user_id = results[0].id;
          queryString = 'INSERT INTO messages (text, roomname, user_id) VALUES (' + text + ',' + roomname + ',' + user_id + ');';

          db.dbConnection.query(queryString, function(err, results) {
            if (err) {
              throw err;
            } else {
              console.log('Insert success!', results);
              callback();
            }
          });
        }
      });
    }
  },

  users: {
    get: function (callback) {
      db.dbConnection.query('SELECT * FROM users;', function(err, results) {
        if (err) {
          throw err;
        } else {
          callback(JSON.stringify(results));
        }
      });
    },
    post: function (user, callback) {
      user = JSON.stringify(user);
      var queryString = 'INSERT INTO users (name) VALUES (' + user + ');';

      db.dbConnection.query('SELECT name FROM users where name=' + user +';', function(err, results) {
        if (err) {
          console.log('what about this');
           callback(err);
        } else {
          console.log('results', results);
          if(results[0]){
            console.log('did this happen?????');
            callback();
          } else {
            db.dbConnection.query(queryString, function(err, results) {
              if (err) {
                callback(err);
              } else {
                callback(results);
              }
            });
          }
        }
      });
    }
  }
};

