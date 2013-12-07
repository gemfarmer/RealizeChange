// Generated by CoffeeScript 1.6.3
(function() {
  var mongoose;

  mongoose = require('mongoose');

  module.exports = {
    startup: function(dbToUse) {
      mongoose.connect(dbToUse);
      mongoose.connection.on('open', function() {
        console.log('We have connected to mongodb');
      });
    },
    closeDB: function() {
      mongoose.disconnect();
    }
  };

}).call(this);