// Declaración de la función
function saludar() {
  console.log("Hola mundo");
}

// Ejecución de la función
saludar();

// Declaración de la función
function saludar2(nombre) {
  console.log("Hola " + nombre);
}

// Ejecución de la función
saludar2("Jesus");

// Declaración de la función
function saludar3(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}

// Ejecución de la función
saludar3("Jesus", "Fernandez");

// Declaración de la función
function saludar4(nombre, apellido) {
  return `Hola ${nombre} ${apellido}`;
}

const saludar4 = (nombre, apellido) => {
  return `Hola ${nombre} ${apellido}`;
};

// Ejecución de la función
const saludo = saludar4("Jesus", "Fernandez");
console.log(saludo);
