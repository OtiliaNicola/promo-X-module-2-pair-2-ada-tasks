'use strict';

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

    // Crea un nuevo elemento <li>
    let list = document.createElement("li");

    // Crea un nuevo elemento <input>
    let listInput = document.createElement("input");
    listInput.type = "checkbox";
    list.appendChild(listInput);

    // Crea un nuevo elemento <span> para el nombre de la tarea
    let taskText = document.createElement("span");
    taskText.innerHTML = task.name;
    list.appendChild(taskText);

    if (task.completed === true) {
      // Tacha e texto en el <li>
      list.classList.add("tachado");
      // Checkea el input
      listInput.checked = true;
    }

    // Agrega el nuevo elemento <li> a la lista <ul>
    taskList.appendChild(list);
  }
};

cargaDatos();
