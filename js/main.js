'use strict';

const handleCheckboxClick = (event) => {
  const checkbox = event.target;
  console.log(`ID del checkbox: ${checkbox.id}, Valor: ${checkbox.checked}`);

  // Se obtiene la posicion del li en el array de tareas, para luego tacharla
  const arrayIdCheckbox = checkbox.id.split('_');
  // ['check', '0']
  const posicionLi = arrayIdCheckbox[1];
  // Armo el id del li que voy a modificar
  const idLi = `list_${posicionLi}`;
  // Obtengo el li
  const liATachar = document.querySelector(`#${idLi}`);

  // Modifico el li de acuerdo si el checkbox esta marcado (true) o no (false)
  if (checkbox.checked) {
    liATachar.classList.add('tachado');
  } else {
    liATachar.classList.remove('tachado');
  }
};

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
const ul = document.querySelector('.task-list');


const cargaDatos = () => {
  // Itero la lista de tasks
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    // console.log("task: " + task.name);

    // Crea un nuevo elemento <li>
    let li = document.createElement("li");
    li.id = `list_${i}`;

    // Crea un nuevo elemento <input>
    let listInput = document.createElement("input");
    listInput.type = "checkbox";
    listInput.id = `check_${i}`; // el id del checkbox se corresponde con el del li
    listInput.addEventListener('click', handleCheckboxClick);
    li.appendChild(listInput);

    // Crea un nuevo elemento <span> para el nombre de la tarea
    let taskText = document.createElement("span");
    taskText.innerHTML = task.name;
    li.appendChild(taskText);

    if (task.completed === true) {
      // Tacha e texto en el <li>
      li.classList.add("tachado");
      // Checkea el input
      listInput.checked = true;
    }

    // Agrega el nuevo elemento <li> a la lista <ul>
    ul.appendChild(li);
  }
};

cargaDatos();
