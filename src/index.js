/* eslint-disable import/extensions */
/* eslint-disable no-loop-func */
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderTasks } from './modules/loadTasks.js';
import { removeTask, editTask } from './modules/tasks.js';

renderTasks();
editTask();
removeTask();

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  renderTasks();
});

// const completed = document.getElementById('removeCompleted');
// completed.addEventListener('click', () => {
//   tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//   let tempTasks = tasks;
//   for (let i = 0; i < tasks.length; i += 1) {
//     if (tasks[i].completed === true) {
//       tempTasks = tempTasks.filter((task) => task.index !== tasks[i].index);
//     }
//   }
//   renderTasks();
// });

export { renderTasks as default };