'use strict';

//boton buscar
const btnFilter = document.querySelector(`.js-btn-filter`);
const inputFilter = document.querySelector('.js-text-task-filter');

function filterTask ()=>{
  const input = inputFilter.value
}
//llamar al boton
btnFilter.addEventListener('click', handleClick);

const handleCheckboxClick = (event) => {
  const checkbox = event.target;
  console.log(`ID del checkbox: ${checkbox.id}, Valor: ${checkbox.checked}`);

  // Se obtiene la posicion del li en el array de tareas, para luego tacharla
  const arrayIdCheckbox = checkbox.id.split('_');
  // ['check', '0']
  const posicionTarea = arrayIdCheckbox[1];
  // Armo el id del li que voy a modificar
  const idLi = `list_${posicionTarea}`;
  // Obtengo el li
  const liATachar = document.querySelector(`#${idLi}`);
  
  // Modifico el li de acuerdo si el checkbox esta marcado (true) o no (false)
  const task = tasks[posicionTarea];
  if (checkbox.checked) {
    task.completed = true;
    liATachar.classList.add('tachado');
  } else {
    task.completed = false;
    liATachar.classList.remove('tachado');
  }

  // console.log('tarea: ' + task.name + '; completed: ' + task.completed);
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
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = `check_${i}`; // el id del checkbox se corresponde con el del li
    input.addEventListener('click', handleCheckboxClick);
    li.appendChild(input);

    // Crea un nuevo elemento <span> para el nombre de la tarea
    let taskText = document.createElement("span");
    taskText.innerHTML = task.name;
    li.appendChild(taskText);

    if (task.completed === true) {
      // Tacha e texto en el <li>
      li.classList.add("tachado");
      // Checkea el input
      input.checked = true;
    }

    // Agrega el nuevo elemento <li> a la lista <ul>
    ul.appendChild(li);
  }
};

cargaDatos();
