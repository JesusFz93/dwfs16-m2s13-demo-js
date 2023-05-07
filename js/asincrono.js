const llamarTodos = async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(resp.data);
  } catch (error) {
    console.log(error);
  }
};

// const llamarTodosPromesa = () => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos")
//     .then((resp) => {
//       console.log(resp);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const llamarTodo = async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/9");
  console.log(resp.data);
};

const crearTodo = async () => {
  const nuevoTodo = {
    completed: true,
    title: "Prueba",
    userId: 1,
  };

  const resp = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    nuevoTodo
  );
  console.log(resp.data);
};

const actualizarTodo = async () => {
  const actualizaTodo = {
    completed: true,
    title: "Prueba",
    userId: 1,
  };

  const resp = await axios.put(
    "https://jsonplaceholder.typicode.com/todos/1",
    actualizaTodo
  );

  console.log(resp.data);
};

const eliminarTodo = async () => {
  const resp = await axios.delete(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(resp.data);
};

llamarTodos();
llamarTodo();
crearTodo();
actualizarTodo();
eliminarTodo();
