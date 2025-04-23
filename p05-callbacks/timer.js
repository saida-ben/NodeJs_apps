const timer = {

    pause(time, callback) {
        setTimeout(callback,time);
    },
    //... autres fct ici
    Promises : {
        pause(time) { //executeur (resolve, reject)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({time, message:'bien resolu'}); //tenu => fct de resolution
                }, time);
            })
        }
    }
    //,... autres promisses
}

export default timer;



// promess cree a base dun executor qui fct qui va garantir l execution de promise une foix terminer (tenu, non tenu(erreur))
// executor besoin de communique deux fct : fct de resolution de la promesse et de rejet de la promesse => le mode asynchrone = > s appele promise vous garantir que ce fct de resolution sera execute une foix promis est tenue 
/*
executer le travail lorsque le temps ecoulee 
le temps ecoule j execute la fct

 remarque  : peux pas avoir plus qu un param ou seul obj {time, message :''}
*/