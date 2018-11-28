// importation de la librairie request
// recherche par défaut dans le répertoire node_modules
var request = require('request')
console.log("A");
// Envoie de la requête http
request(

    //l'url d'acces
    'http://2018.breizhcamp.org/json/talks.json', 

//options
{ json: true }, 

//fonction callback
function(err, res, body) {
console.log("B");
    if (err) { 
        return console.log('Erreur', err); 
    }

    // body contient les données récupérées
    console.log('Ok', body);
});
console.log("C");
// request('http://2018.breizhcamp.org/json/others.json', { json: true }, function(err, res, body) {
//     if (err) { return console.log('Erreur', err); }

//     // body contient les données récupérées
//     console.log('Ok', body);
// });