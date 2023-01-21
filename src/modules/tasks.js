/* eslint-disable import/extensions */
import { renderTasks } from './loadTasks.js';

const listTarget = document.querySelector('.list');

const addInputField = document.getElementById('inputTask');

export const editAddTask = () => {
  listTarget.addEventListener('keypress', (e) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if ((e.key === 'Enter') && (e.target.matches('.edit-input'))) {
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === taskId) {
          tasks[i].description = e.target.value;
        }
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    } else if ((e.key === 'Enter') && (e.target.matches('#inputTask'))) {
      const taskObj = {
        index: tasks.length === 0 ? 1 : tasks.length + 1,
        description: addInputField.value,
        completed: false,
      };
      tasks.push(taskObj);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      addInputField.value = '';
      renderTasks();
    }
  });
};

export const fixIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const removeTask = () => {
  listTarget.addEventListener('click', (e) => {
    if (e.target.matches('.fa-trash')) {
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const idArray = (e.target.id).split('_');
      const taskId = Number(idArray[idArray.length - 1]);
      tasks = tasks.filter((task) => task.index !== taskId);
      fixIndex(tasks);
      renderTasks();
    }
  });
};