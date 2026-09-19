const prompt = require('prompt-sync')();

let Vitesse = parseInt(prompt('Entrez la vitesse en kilomètres par heure:'));
let ms = Vitesse * 0.27778;

console.log('m/s = ' + ms);