/* eslint-disable  import/no-cycle */
/* eslint-disable import/extensions */
import { renderTasks } from '../index.js';

const addInputField = document.getElementById('inputTask');
addInputField.addEventListener('keypress', (e) => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (e.key === 'Enter') {
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

const fixIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const removeTask = (taskId) => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter((task) => task.index !== taskId);
  fixIndex(tasks);
  renderTasks();
};

export const editTast = (id) => {
  const inputText = document.getElementById(`list_${id}`);
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index === id) {
          tasks[i].description = inputText.value;
        }
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }
  });
};
