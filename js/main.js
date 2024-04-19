'use strict';

// Entendiendo como funciona el for
// const ejemplo = ['hola', 'chao'];
// for (const value of ejemplo) {
//   console.log("iteracion: " + value);
// }


// Obtener el elemento <ul> al que deseas agregar el <li>
// const taskList = document.querySelector('.task-list');

// Crear un nuevo elemento <li>
// let nuevoElemento = document.createElement("li");

// Agregar texto al nuevo elemento <li>
// nuevoElemento.textContent = "hola mundo";

// Agregar el nuevo elemento <li> a la lista <ul>
// taskList.appendChild(nuevoElemento);





const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  }
];

// Obtener el elemento <ul> al que deseas agregar el <li>
const taskList = document.querySelector('.task-list');

const cargaDatos = () => {
  // Itero la lista de tasks
  for (const task of tasks) {
    console.log("task: " + task.name);

    // Crear un nuevo elemento <li>
    let nuevoElemento = document.createElement("li");

    // Agregar texto al nuevo elemento <li>
    nuevoElemento.textContent = task.name;

    // Agregar el nuevo elemento <li> a la lista <ul>
    taskList.appendChild(nuevoElemento);
  }
};

cargaDatos();




  // funcin que recoge el evento clieck
  // const xx = { name: 'Recoger setas en el campo', completed: true }
  