function esPalindromo(cadena) {
  const cadenaLimpia = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,:;()_?¿!¡-\s]/g, "");
  if (cadenaLimpia.toLowerCase()
    .split("")
    .reverse()
    .join("") === cadenaLimpia.toLowerCase()) { return true; } else { return false; }
}

const miCadena = "hòla ?alóh!";

console.log(esPalindromo(miCadena));

/* const esPalindromo = cadena => cadena
  .toLowerCase()
  .split("")
  .reverse()
  .join("") === cadena.toLowerCase();  */
