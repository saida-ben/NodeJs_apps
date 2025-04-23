import timer from "./timer.js"; //export != export default (pas de {timer}) import timer , {p1, p2}

function exp01() {
    timer.pause(5000, () =>{
        console.log('5 secondes se sont écoulées !');
    })
}
function exp02(){
    timer.Promises.pause(5000)
    .then(time => {
        console.log(`5 secondes se sont écoulées a base d'une promesse !`);
    })
}

function main() {
   // exp01();
   exp02();
}

main();

// creer fct dans l un des params (arrow function ?)
