import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item/todo-item';

const ToDoList = ({ tasksList }) => (
  <div>
    <ul className="todo-list">
      {tasksList.map(({ id, text, isCompleted }) => (
        <ToDoItem key={id} text={text} isCompleted={isCompleted} />
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
};

ToDoList.defaultProps = {
  tasksList: [],
};

export default ToDoList;
