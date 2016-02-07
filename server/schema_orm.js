var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'password');

var Users = db.define('users', {
  username: Sequelize.STRING
});

var Messages = db.define('messages', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING,
  user_id: Sequelize.INTEGER
});

Users.sync();

Messages.sync();