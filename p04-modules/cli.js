#!/user/bin/env node  
//directive d'interpretation (shebang) ligne shebang : directive d'interpretation  voila j utilse node pour l interpretation de ce contenu 
console.log('Ceci est notre package MQL');
let args = ProcessingInstruction.argv.slice(2); // on enlève les 2 premiers arguments (node et le nom du fichier)
console.log(args.reduce((pv, cv) => pv + parseInt(cv))); // on affiche les arguments restants