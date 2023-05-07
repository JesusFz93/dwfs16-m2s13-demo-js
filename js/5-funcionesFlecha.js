// Declaración de la función
const saludar = () => {
  console.log("Hola mundo");
};

// Ejecución de la función
saludar();

// Declaración de la función
const saludar2 = (nombre) => {
  console.log("Hola " + nombre);
};

// Ejecución de la función
saludar2("Jesus");

// Declaración de la función
const saludar3 = (nombre, apellido) => {
  console.log(`Hola ${nombre} ${apellido}`);
};

// Ejecución de la función
saludar3("Jesus", "Fernandez");

// Declaración de la función
const saludar4 = (nombre, apellido) => {
  return `Hola ${nombre} ${apellido}`;
};

// Ejecución de la función
const saludo = saludar4("Jesus", "Fernandez");
console.log(saludo);
