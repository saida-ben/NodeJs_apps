const timer = {

    pause(time, callback) {
        setTimeout(callback,time);
    },
    Promises : {
        pause(time) { //executeur (resolve, reject)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(time);
                }, time);
            })
        }
    }
}

export default timer;