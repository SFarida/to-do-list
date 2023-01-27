import { addTask, removeTask, editTask, completed, clearCompleted } from './modules/store';

describe('Add task', () => {
  localStorage.removeItem('tasks');
  test('Add task "sleep"', () => {
    expect(addTask('sleep')).toEqual([{ completed: false, description: 'sleep', index: 1 }]);
  });
  test('Add task "cook"', () => {
    expect(addTask('cook')).toEqual([{ completed: false, description: 'sleep', index: 1 },{ completed: false, description: 'cook', index: 2 }]);
  });
  test('Edit task "sleep"', () => {
    editTask(1, 'sleeping');
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'sleeping', index: 1 }, { completed: false, description: 'cook', index: 2 }]);
  });
  test('Completed task "sleeping"', () => {
    completed(1, true);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: true, description: 'sleeping', index: 1 }, { completed: false, description: 'cook', index: 2 }]);
  });
  test('Clear completed task "sleeping"', () => {
    clearCompleted();
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([{ completed: false, description: 'cook', index: 1 }]);
  });
  test('Delete task "sleep"', () => {
    removeTask(1);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});