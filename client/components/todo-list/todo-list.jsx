import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item/todo-item';

const ToDoList = ({
  tasksList, removeTask, completeTask, toggleTaskPriority,
}) => (
  <div>
  <ul className="todo-list">
    {tasksList.map(({
      id, text, isCompleted, priority,
    }) => (
      <ToDoItem completeTask={completeTask} priority={priority}
      toggleTaskPriority={toggleTaskPriority} removeTask={removeTask} id={id} key={id}
      text={text} isCompleted={isCompleted} />
    ))}
  </ul>
    <style jsx>{`
        .todo-list {
          margin: 0;
          padding: 0;
        }
        `}</style>
  </div>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
};

export default ToDoList;
