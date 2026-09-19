const prompt = require('prompt-sync')();
let kilomètre = parseInt(prompt('Quelle est la distance en kilomètre ?: '));
let yards = kilomètre * 1093.61;
console.log('yards ='+ yards); 