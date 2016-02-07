var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(msgs) {
        res.end(msgs);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message, function() {
        res.end();
      });

     } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(users) {
        res.end(users);
      });
    },
    post: function (req, res) {
      var user = req.body.username;
      models.users.post(user, function() {
        res.end();
      });
    }
  }
};

