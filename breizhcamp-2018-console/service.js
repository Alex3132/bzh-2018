var request = require('request');
// tableau qui contiendra toutes les sessions du BreizhCamp
var talks = [];

// class Talks {
//   constructor(e) {
//     this.description = description;
//     this.event_end = event_end;
//     this.event_start = event_start;
//     this.event_type = event_type;
//     this.file_url = file_url;
//     this.format = format;
//     this.id = id;
//     this.name = name;
//     this.slides_url = slides_url;
//     this.speakers = speakers;
//     this.venue = venue;
//     this.venue_id = venue_id;
//     this.video_url = video_url;
//   }
// }
exports.init = function (callback) {

  // var nbResultat = 0;
  // function notifResultat() {
  //   nbResultat++
  //   if (nbResultat == 2)
  //     callback(talks.length);
  // }
  //talks est vide
  var talks = [];
  request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, tabTalks1) {
    //  if(!err){
    //    body.array.forEach(e => talks.push(new Talks(e)));
    //  }
    //  callback(talks.length);

    talks = talks.concat(tabTalks1);

    request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, tabTalks2) {
      //  if(!err){
      //    body.array.forEach(e => talks.push(new Talks(e)));
      //  }
      //  callback(talks.length);

      talks = talks.concat(tabTalks2);

      // TODO         => invoquer la callback avec le nombre de sessions récupérées
      callback(talks.length);
    });
  });
  //talks est vide

  exports.listerSessions = function (callback) {

        callback(talks);
  }
    //talks est vide
}
