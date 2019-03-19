import { load } from 'redux-localstorage-simple';
import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  TOGGLE_TASK,
} from '../constants';

let TASKS = {};

if (typeof window !== 'undefined') {
  TASKS = load({ namespace: 'todo-list' });
}

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [
      {
        id: 1543325996926,
        text: 'create app',
        isCompleted: true,
        priority: 'High',
      },
      {
        id: 1425057783825,
        text: 'connect Redux',
        isCompleted: false,
        priority: 'Medium',
      },
      {
        id: 1481134813365,
        text: 'connect mongo',
        isCompleted: false,
        priority: 'Low',
      },
    ],
  };
}

const tasks = (state = TASKS.tasks, {
  id,
  text,
  isCompleted,
  priority,
  type,
}) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, {
          id,
          text,
          isCompleted,
          priority,
        },
      ];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);
    case TOGGLE_TASK:
      return [...state].map((task) => {
        if (task.id === id) {
          // eslint-disable-next-line no-shadow
          if (task.priority === 'High') return { ...task, priority: 'Medium' };
          if (task.priority === 'Medium') return { ...task, priority: 'Low' };
          if (task.priority === 'Low') return { ...task, priority: 'High' };
        }
        return task;
      });
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
