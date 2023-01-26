import { removeTask } from "./modules/tasks";
import { editAddTask } from "./modules/tasks";

describe('Add, remove task', () => {
    test('length of "good" is 4', () => {
        expect(stringLength("good")).toBe(4);
    });
});