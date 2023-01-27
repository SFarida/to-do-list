/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';
import { getData, storeData } from './store.js';

const listTarget = document.querySelector('.list');
export const updateTaskStatus = () => {
  listTarget.addEventListener('change', (e) => {
    const tasks = getData();
    if (e.target.matches('.form-check-input')) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === taskId) {
          tasks[i].completed = e.target.checked;
        }
      }
      storeData(tasks);
      renderTasks();
    }
  });
};

export { updateTaskStatus as default };