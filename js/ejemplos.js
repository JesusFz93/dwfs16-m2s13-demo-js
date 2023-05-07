const marcas = ["Toyota", "Ford", "Mazda"];
const edades = [6, 3, 8, 2, 9, 5, 3, 2];

marcas.forEach((marca) => {
  console.log(marca);
});

const nuevas_marcas = marcas.map((marca) => {
  return marca + "s";
});

const marcas_buscadas = marcas.filter((marca) => {
  return marca.includes("a");
});

const edades_mayores_a_5 = edades.filter((edad) => {
  return edad >= 5;
});

console.log(marcas);
console.log(edades_mayores_a_5);
// console.log(nuevas_marcas);
