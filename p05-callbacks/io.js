import fs from 'fs';

//readFileSync : akfes maymkn lwahd idir , version sync de readFile => pour mock de donnees ? pour les tests unitaires
//java : plateforme multhithreading
//nodeJs singlethread  )
//realisation de equivalent en java : couches : moteur jsp & api rest consomable un client frontend 


const io = {
    readFile(source, callback){
        fs.readFile(source, 'utf-8', (err , data) => {
            if(err) {
                console.log('erreur de lecture : ' + err.message);
            }
            else {
                callback(data); //callback(data) => fct de callback qui va traiter le contenu du fichier je l ai cmmunique les donnees recus
            }
        })
    },
    promises : {

        readFile(source) {
            return new Promise (
                (resolve, reject) => {
                    fs.readFile(source, 'utf-8', (err, data) => {
                        if(err) reject(err); //reject => erreur
                         else resolve(data); //resolve => donnees
                    })
                }
            )
        }
},


}

export default io;

//indifened est  fullsy