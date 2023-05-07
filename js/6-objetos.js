const persona = {
  nombre: "Jesus",
  apellido: "Fernandez",
  edad: 30,
  activo: true,
  direccion: {
    calle: "Primera",
    numero: 20,
    departamento: "B",
    coordenadas: {
      lat: 14.3232,
      lng: 34.9233,
      referencias: ["a", "b", "c"],
    },
  },
  deportes: ["futbol", "basket", "tenis"],
  saludar: (nombre, apellido) => {
    return `Hola ${nombre} ${apellido}`;
  },
};

// console.log(persona.direccion.coordenadas.referencias[1]);

// let saludo = persona.saludar(persona.nombre, persona.apellido);
// console.log(saludo);
// //console.log(persona);

// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// console.log(persona.activo);
// console.log(persona.direccion.calle);
// console.log(persona.direccion.numero);
// console.log(persona.direccion.departamento);

// console.log(persona["nombre"]);
// console.log(persona["apellido"]);
// console.log(persona["edad"]);
// console.log(persona["activo"]);
// console.log(persona["direccion"]["calle"]);
// console.log(persona["direccion"]["numero"]);
// console.log(persona["direccion"]["departamento"]);

// // desestructuración
// const {
//   nombre,
//   apellido,
//   edad,
//   activo,
//   direccion: { calle, numero, departamento },
// } = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);
// console.log(activo);
// console.log(calle);
// console.log(numero);
// console.log(departamento);

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
};

const perro = {
  raza: "labrador",
  edad: 3,
  nombre: "Firulais",
};

const la_marca = carro.marca;
const la_marca2 = carro["marca"];
const { marca } = carro;

console.log(la_marca);
console.log(la_marca2);
console.log(marca);
