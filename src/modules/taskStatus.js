/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';
import { completed, getData } from './store.js';

const listTarget = document.querySelector('.list');
export const updateTaskStatus = () => {
  listTarget.addEventListener('change', (e) => {
    const tasks = getData();
    if (e.target.matches('.form-check-input')) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      completed(taskId, e.target.checked);
      renderTasks();
    }
  });
};

export { updateTaskStatus as default };