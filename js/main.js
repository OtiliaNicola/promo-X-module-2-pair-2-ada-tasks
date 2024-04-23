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

// Crear un input tipo checkbox
//let checkbox = document.createElement("input");
//checkbox.type = "checkbox";
//checkbox.checked = task.completed; // Estado inicial del checkbox
//checkbox.disabled = true; 

const cargaDatos = () => {
  // Itero la lista de tasks
  for (const task of tasks) {
    console.log("task: " + task.name);

    // Crear un nuevo elemento <li>
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = `
    <li><input type="checkbox" ${task.completed 'checked' : ''}</li>';

    // Agregar texto al nuevo elemento <li> METER CHECKBOX
    //SI TASCK ES VERDADERO AÑADIR LA CLASE DENTRO DEL FORM
  if (task.completed === true) {
    nuevoElemento.classList.add ('tachado')
  }
    nuevoElemento.textContent = task.name;
   

    // Agregar el nuevo elemento <li> a la lista <ul>
    taskList.appendChild(nuevoElemento);
  }
};

cargaDatos();
  // funcin que recoge el evento clieck
  // const xx = { name: 'Recoger setas en el campo', completed: true }
  const taskFilter = document.querySelector ('.js-text-task-filter');
  //taskFilter() => { }


//2--> TAREA 2- tachado










/*PONER EN FUNCIONAMIENTO AÑADIR NUEVA TAREA

//1-> creo const del botón Agregar.
const btnAdd = document.querySelector('.js-btn-add');
//1.1-> creo const del input
const textTask = document.querySelector('.js-text-task-add')

//2-> creo la función para añadir tareas
function addTask() {
  event.preventDefalut();
  console.log('lsdfjdk');
  const addText = taskInput.value.push();
  if (addText !== ""); 
  addTask.claslist.addeventlistener('click', handleclick);
};*/