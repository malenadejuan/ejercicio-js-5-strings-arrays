const esPalindromo = cadena => {
  const cadenaLimpia = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,:;()_?¿!¡-\s]/g, "");
  return cadenaLimpia.toLowerCase()
    .split("")
    .reverse()
    .join("") === cadenaLimpia.toLowerCase();
};

const miCadena = "hòla ?alóh!";

console.log(`La frase ${esPalindromo(miCadena) ? "" : "no "}es un palíndromo`);

/* const esPalindromo = cadena => cadena
  .toLowerCase()
  .split("")
  .reverse()
  .join("") === cadena.toLowerCase();  */
