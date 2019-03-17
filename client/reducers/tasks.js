import { load } from 'redux-localstorage-simple';
import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants';

let TASKS = {};

if (typeof window !== 'undefined') {
  TASKS = load({ namespace: 'todo-list' });
}

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [
      {
        id: 1,
        text: 'create app',
        isCompleted: true,
      },
      {
        id: 2,
        text: 'connect Redux',
        isCompleted: false,
      },
      {
        id: 3,
        text: 'connect mongo',
        isCompleted: false,
      },
    ],
  };
}

const tasks = (state = TASKS.tasks, {
  id,
  text,
  isCompleted,
  type,
}) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          // eslint-disable-next-line no-param-reassign
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;
