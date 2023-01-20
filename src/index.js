/* eslint-disable import/extensions */
/* eslint-disable no-loop-func */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { removeTask, editTast } from './modules/tasks.js';

let tasks = [];

const renderTasks = () => {
  const container = document.getElementById('list');
  container.replaceChildren();
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const list = document.createElement('ul');
  list.setAttribute('class', 'list-group');
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const inputSpan = document.createElement('span');
    const listLink = document.createElement('a');
    listLink.style.cursor = 'pointer';
    listLink.setAttribute('class', 'text-secondary');
    listLink.style.float = 'right';
    const listMenu = document.createElement('i');
    listMenu.setAttribute('class', 'fa fa-ellipsis-v');
    listLink.appendChild(listMenu);
    const listContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('value', tasks[i].description);
    editInput.setAttribute('class', 'form-control');
    editInput.setAttribute('id', `list_${tasks[i].index}`);
    // editInput.style.display = "none";
    inputSpan.appendChild(editInput);
    checkbox.setAttribute('class', 'form-check-input me-3');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = tasks[i].completed;
    const spanText = document.createTextNode(tasks[i].description);
    span.appendChild(spanText);

    // creating col div for checkbox
    const checkboxDiv = document.createElement('div');
    checkboxDiv.setAttribute('class', 'col-md-1');
    checkboxDiv.appendChild(checkbox);

    // creating col div for list description span
    const spanDiv = document.createElement('div');
    spanDiv.setAttribute('class', 'col-md list-description');
    spanDiv.appendChild(span);

    // creating col div for input edit span
    const inputSpanDiv = document.createElement('div');
    inputSpanDiv.setAttribute('class', 'col-md edit-description');
    inputSpanDiv.style.display = 'none';
    inputSpanDiv.appendChild(inputSpan);

    // creating col div for link
    const listLinkDiv = document.createElement('div');
    listLinkDiv.setAttribute('class', 'col-md-2');
    listLinkDiv.appendChild(listLink);

    listContainer.appendChild(checkboxDiv);
    listContainer.appendChild(spanDiv);
    listContainer.appendChild(inputSpanDiv);
    listContainer.appendChild(listLinkDiv);
    listContainer.setAttribute('class', 'row');
    item.appendChild(listContainer);
    item.setAttribute('class', 'list-item');

    listContainer.addEventListener('click', () => {
      listMenu.classList.remove('fa-ellipsis-v');
      listMenu.classList.add('fa-trash');
      inputSpanDiv.style.display = 'block';
      spanDiv.style.display = 'none';
      editTast(tasks[i].index);
    });

    listLink.addEventListener('click', () => {
      removeTask(tasks[i].index);
    });
    item.setAttribute('class', 'list-group-item');

    list.appendChild(item);
  }

  container.appendChild(list);
};

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  renderTasks();
});

const completed = document.getElementById('removeCompleted');
completed.addEventListener('click', () => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let tempTasks = tasks;
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      tempTasks = tempTasks.filter((task) => task.index !== tasks[i].index);
    }
  }
  renderTasks();
});

window.onload = () => {
  renderTasks();
};