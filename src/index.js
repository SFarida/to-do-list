/* eslint-disable import/extensions */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTasks } from './modules/loadTasks.js';
import { removeTask, editAddTask, fixIndex } from './modules/tasks.js';
import { updateTaskStatus } from './modules/taskStatus.js';

renderTasks();
editAddTask();
removeTask();
updateTaskStatus();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  renderTasks();
});

const completed = document.getElementById('removeCompleted');
completed.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let tempTasks = tasks;
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      tempTasks = tempTasks.filter((task) => task.index !== tasks[i].index);
    }
  }
  fixIndex(tempTasks);
  renderTasks();
});

export { renderTasks as default };