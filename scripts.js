/* function esPalindromo(cadena) {

} */

const miCadena = "hola";

const esPalindromo = cadena => cadena.toLowerCase().split("").reverse().join("") === cadena.toLowerCase();

console.log(esPalindromo(miCadena));
