const frutas = ["pera", "manzana", "uva", "sandia"];

// ALTERAR ARREGLOS
console.log("ALTERAR ARREGLOS");
console.log(frutas);
// Agregar un elemento al final del arreglo
frutas.push("naranja");
console.log(frutas);

// Agregar un elemento al inicio del arreglo
frutas.unshift("limon");
console.log(frutas);

// Eliminar el último elemento del arreglo
frutas.pop();
console.log(frutas);

// Eliminar el primer elemento del arreglo
frutas.shift();

// Obtener el índice de un elemento del arreglo
const indice = frutas.indexOf("uva");
console.log(indice);

// Eliminar un elemento del arreglo
frutas.splice(indice, 1);
console.log(frutas);

// Iterar el arreglo
frutas.forEach((fruta) => {
  console.log(fruta);
});

// ITERACIONES
console.log("ITERACIONES");
console.log(frutas);
// Iterar el arreglo con map
const frutasMayusculas = frutas.map((fruta) => {
  return fruta.toUpperCase();
});
console.log(frutasMayusculas);

// Iterar el arreglo con filter
const frutasConA = frutas.filter((fruta) => {
  return fruta.includes("a");
});
console.log(frutasConA);

// Iterar el arreglo con find
const fruta = frutas.find((fruta) => {
  return fruta.includes("a");
});
console.log(fruta);
