/**
* Random.js v.0.3
* Simple test javascript file displaying logic < / > 0.5 over a Math.random() generated value
* https://github.com/roabhi/_random
*
* Licensed under the WTFPL license
*/

var numero = Math.random();

var str = 'MAYOR que 0,5';

if (numero <= 0.5) {

  str = ' MENOR que 0,5';

}

console.log('\n' + numero + str + '\n');
