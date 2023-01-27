import { addTask, removeTask } from './modules/store';

describe('Add task', () => {
  localStorage.removeItem('tasks');
  test('Add task "sleep"', () => {
    expect(addTask('sleep')).toEqual([{ completed: false, description: 'sleep', index: 1 }]);
  });
  test('Delete task "sleep"', () => {
    removeTask(1);
    expect(JSON.parse(localStorage.getItem('tasks'))).toEqual([]);
  });
});