console.log('--- Exemple N° 1 ---');
//console.log(window)     // Erreur window is not defined
//console.log(document)  // Erreur document is not defined 

let x = 20;
global.console.log('x = ', x);
global.console.log('x = ', global.x);

//module, exports, require, __filename, __dirname

console.log(module);
let globals = Object.getOwnPropertyDescriptors(global);
console.log(globals);
console.log("Nombres d'Object Globeaux : " + globals.length);