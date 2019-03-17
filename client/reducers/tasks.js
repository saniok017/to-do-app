import { ADD_TASK } from '../constants';

const TASKS = [
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
];

const tasks = (state = TASKS, {
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
    default:
      return state;
  }
};

export default tasks;
