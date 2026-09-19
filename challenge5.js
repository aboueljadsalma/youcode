const prompt = require('prompt-sync')();
let Temperérature = Number(prompt(Entrez la température en Celsius :));
if (Temperérature < 0 ){
     console.log ('solide');
}
else if ( Temperérature >= 100 ){
    console.log (Temperérature)
}