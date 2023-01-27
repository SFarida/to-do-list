/* eslint-disable import/extensions */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTasks } from './modules/loadTasks.js';
import { clickListener, keypressListener } from './modules/tasks.js';
import { updateTaskStatus } from './modules/taskStatus.js';
import { clearCompleted } from './modules/store.js';

renderTasks();
keypressListener();
clickListener();
updateTaskStatus();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  renderTasks();
});

const completed = document.getElementById('removeCompleted');
completed.addEventListener('click', () => {
  clearCompleted();
  renderTasks();
});
