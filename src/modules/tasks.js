/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';
import { addTask, editTask, removeTask } from './store.js';

const listTarget = document.querySelector('.list');

const addInputField = document.getElementById('inputTask');

export const keypressListener = () => {
  listTarget.addEventListener('keypress', (e) => {
    if ((e.key === 'Enter') && (e.target.matches('.edit-input'))) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      const taskDesc = e.target.value;
      editTask(taskId, taskDesc);
      renderTasks();
    } else if ((e.key === 'Enter') && (e.target.matches('#inputTask'))) {
      addTask(addInputField.value);
      addInputField.value = '';
      renderTasks();
    }
  });
};

export const clickListener = () => {
  listTarget.addEventListener('click', (e) => {
    if (e.target.matches('.fa-trash')) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      removeTask(taskId);
      renderTasks();
    }
  });
};