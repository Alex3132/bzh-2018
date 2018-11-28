var service = require('./service');
var readline = require('readline');

//Initialisation
exports.start = function() {

        service.init(function(nb) {
             console.log('[init]', nb, 'sessions trouvées.')
         });
         var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
            rl.question('*************************\r\n'+'1. Rafraichir les données\r\n'+ '2. Lister les sessions\r\n'+'99. Quitter\r\n', function(saisie) {
                console.log(`Vous avez saisi : ${saisie}`);
                switch (saisie){
                    case "1": 
                    service.init(function(nb) {
                        console.log('[init]', nb, 'sessions trouvées.')
                    });
                    console.log("Données à jour.....");
                    break;
                    case "2":
                    service.listerSessions(function(sessions){
                        sessions.forEach(session => {
                            console.log(session.name,"("+session.speakers+")");
                        });
                    });
                    break;
                    case "99":
                    break;
                    default:console.log("vous avez saisi un mauvais numéro");
                }
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
            
            });



        }
