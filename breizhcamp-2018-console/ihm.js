const Service = require('./service');
const readline = require('readline');

const service = new Service();

//Initialisation
module.exports = class Ihm {

        const $promise = service.init()

        const $speakers = service.getSpeakers()
        // version promesse
        $promise.then( nb => {
            console.log('[init]', nb, 'sessions trouvées.')
        })
        
         let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        let questions= `*************************
        1. Rafraichir les données
        2. Lister les sessions 
        3. Lister les présentateurs 
        99. Quitter
        `;
            rl.question(questions, saisie => {
                console.log(`Vous avez saisi : ${saisie}`);
                switch (saisie){
                    case "1": 

                    // version callback
                    $promise.then(nb => {
                        console.log('[init]', nb, 'sessions trouvées.')
                    });
                    console.log("Données à jour.....");
                    break;
                    case "2":
                    service.listerSessions().then(sessions =>{
                        sessions.forEach(session => {
                            console.log(session.name,"("+session.speakers+")");
                        });
                    });
                    break;
                    case "3":
                   $speakers.then(speakers => { 
                        speakers.forEach(s=>console.log(s.innerHTML)) 
                    })
                    break;
                    case "99":
                    break;
                    default:console.log("vous avez saisi un mauvais numéro");
                }
                rl.close();// attention, une fois l'interface fermée, la saisie n'est plus possible
            
            });



        }
