/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';
import { getData, storeData } from './store.js'

const listTarget = document.querySelector('.list');

const addInputField = document.getElementById('inputTask');

export const editAddTask = () => {
  listTarget.addEventListener('keypress', (e) => {
    const tasks = getData();
    if ((e.key === 'Enter') && (e.target.matches('.edit-input'))) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === taskId) {
          tasks[i].description = e.target.value;
        }
      }
      storeData(tasks);
      renderTasks();
    } else if ((e.key === 'Enter') && (e.target.matches('#inputTask'))) {
      const taskObj = {
        index: tasks.length === 0 ? 1 : tasks.length + 1,
        description: addInputField.value,
        completed: false,
      };
      tasks.push(taskObj);
      storeData(tasks);
      addInputField.value = '';
      renderTasks();
    }
  });
};

export const fixIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  storeData(tasks);
};

export const removeTask = () => {
  listTarget.addEventListener('click', (e) => {
    if (e.target.matches('.fa-trash')) {
      let tasks = getData();
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      tasks = tasks.filter((task) => task.index !== taskId);
      fixIndex(tasks);
      renderTasks();
    }
  });
};