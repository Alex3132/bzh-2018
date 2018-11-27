var request = require('request');
// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

exports.init = function (callback) {

   var request = request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function(err, res, body) {console.log('Ok', body);});

  callback(talks.length);
};
