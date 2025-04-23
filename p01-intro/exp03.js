console.log('### Exemple 03 ###');

let args = process.argv;
args = args.slice(2);
console.log(args);
let sum = args.reduce((pv,cv) => pv + parseInt(cv), 0);
console.log('la somme est : ', sum);

// p01.cmd : on click deux fois 
