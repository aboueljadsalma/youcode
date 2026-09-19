const prompt = require('prompt-sync')();
let celsius = prompt('donnez la tenpérature de celsius:')
let kelvin = Number(celsius) + 273.15;
console.log("la température en Kelvin c'est : " + kelvin);