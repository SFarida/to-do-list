import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const tasks = [
  {
    index: 1,
    description: 'Wake up',
    completed: false,
  },
  {
    index: 2,
    description: 'Pray',
    completed: false,
  },
];

const renderTasks = () => {
  const container = document.getElementById('list');
  const list = document.createElement('ul');
  list.setAttribute('class', 'list-group');
  for (let i = 0; i < tasks.length; i += 1) {
    const item = document.createElement('li');
    const span = document.createElement('span');
    const listLink = document.createElement('a');
    listLink.style.cursor = 'pointer';
    listLink.setAttribute('class', 'text-secondary');
    listLink.style.float = 'right';
    const listMenu = document.createElement('i');
    listMenu.setAttribute('class', 'fa fa-ellipsis-v');
    listLink.appendChild(listMenu);
    const listContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('class', 'form-check-input me-3');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = tasks[i].completed;
    const spanText = document.createTextNode(tasks[i].description);
    span.appendChild(spanText);
    listContainer.appendChild(checkbox);
    listContainer.appendChild(span);
    listContainer.appendChild(listLink);
    item.appendChild(listContainer);
    item.setAttribute('class', 'list-group-item');

    list.appendChild(item);
  }

  container.appendChild(list);
};

window.onload = () => {
  renderTasks();
};