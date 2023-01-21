/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';

const listTarget = document.querySelector('.list');
export const updateTaskStatus = () => {
  listTarget.addEventListener('change', (e) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (e.target.matches('.form-check-input')) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === taskId) {
          tasks[i].completed = e.target.checked;
        }
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  });
};

export { updateTaskStatus as default };