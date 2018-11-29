const request = require('request-promise-native')
const jsdom = require('jsdom');
// tableau qui contiendra toutes les sessions du BreizhCamp



module.exports = class Service {

  constructor() {
    this.talks = []
    this.speakers = []
  }


  init(){

      // var nbResultat = 0;
      // function notifResultat() {
      //   nbResultat++
      //   if (nbResultat == 2)
      //     callback(talks.length);
      // }
      //talks est vide
      this.talks = []
      return new Promise (resolve=>{
        request('http://2018.breizhcamp.org/json/talks.json', { json: true }, (err, res, tabTalks1) => {
          //  if(!err){
          //    body.array.forEach(e => talks.push(new Talks(e)));
          //  }
          //  callback(talks.length);
      
          this.talks =  this.talks.concat(tabTalks1);
      
              request('http://2018.breizhcamp.org/json/others.json', { json: true }, (err, res, tabTalks2)  => {
            //  if(!err){
            //    body.array.forEach(e => talks.push(new Talks(e)));
            //  }
            //  callback(talks.length);
      
            this.talks =  this.talks.concat(tabTalks2);
      
            // TODO         => invoquer la callback avec le nombre de sessions récupérées
                  resolve(this.talks.length);
          });
        });
      })
     

  };

   listerSessions(){
    return new Promise ((resolve =>{
      resolve(this.talks);
    }))
    
  }

  getSpeakers(){
  {
    return new Promise (function (resolve, reject){
      request('https://2018.breizhcamp.org/conference/speakers/', {}, (err, res, body) =>{
        
          resolve((new jsdom.JSDOM(body)).window.document.querySelectorAll(".media-heading"));
      });
    })
      

  }
}
}











// exports.init = function (callback) {

//   // var nbResultat = 0;
//   // function notifResultat() {
//   //   nbResultat++
//   //   if (nbResultat == 2)
//   //     callback(talks.length);
//   // }
//   //talks est vide
//   var talks = [];
//   request('http://2018.breizhcamp.org/json/talks.json', { json: true }, function (err, res, tabTalks1) {
//     //  if(!err){
//     //    body.array.forEach(e => talks.push(new Talks(e)));
//     //  }
//     //  callback(talks.length);

//     talks = talks.concat(tabTalks1);

//     request('http://2018.breizhcamp.org/json/others.json', { json: true }, function (err, res, tabTalks2) {
//       //  if(!err){
//       //    body.array.forEach(e => talks.push(new Talks(e)));
//       //  }
//       //  callback(talks.length);

//       talks = talks.concat(tabTalks2);

//       // TODO         => invoquer la callback avec le nombre de sessions récupérées
//       callback(talks.length);
//     });
//   });
//  } //talks est vide

//   exports.listerSessions = function (callback) {

//         callback(talks);
//   }
//     //talks est vide

//     exports.getSpeakers = function (callback){
//       request('https://2018.breizhcamp.org/conference/speakers/', {}, function (err, res, body){
//         callback((new jsdom.JSDOM(body)).window.document.querySelectorAll(".media-heading"));
//       });
//     }

