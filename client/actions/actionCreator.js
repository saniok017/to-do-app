import {
  ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, TOGGLE_TASK,
} from '../constants';

export const addTask = (id, text, isCompleted, priority) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
  priority,
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id,
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
});

export const toggleTaskPriority = id => ({
  type: TOGGLE_TASK,
  id,
});
