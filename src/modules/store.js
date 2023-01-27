export const getData = () => {
  const data = JSON.parse(localStorage.getItem('tasks')) || [];
  return data;
};

export const storeData = (data) => {
  localStorage.setItem('tasks', JSON.stringify(data));
};

export const fixIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  storeData(tasks);
};

export const addTask = (desc) => {
  const tasks = getData();
  const taskObj = {
    index: tasks.length === 0 ? 1 : tasks.length + 1,
    description: desc,
    completed: false,
  };
  tasks.push(taskObj);
  storeData(tasks);
  return tasks;
};

export const removeTask = (id) => {
  let tasks = getData();
  tasks = tasks.filter((task) => task.index !== id);
  fixIndex(tasks);
};

export const editTask = (id, desc) => {
  const tasks = getData();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === id) {
      tasks[i].description = desc;
    }
  }
  storeData(tasks);
};

export const completed = (id, status) => {
  const tasks = getData();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === id) {
      tasks[i].completed = status;
    }
  }
  storeData(tasks);
};

export const clearCompleted = () => {
  const tasks = getData();
  let tempTasks = tasks;
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      tempTasks = tempTasks.filter((task) => task.index !== tasks[i].index);
    }
  }
  fixIndex(tempTasks);
};