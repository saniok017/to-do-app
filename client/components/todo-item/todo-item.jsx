import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({
  text, isCompleted, removeTask, id, completeTask,
}) => (
  <div>
    <li className="todo-item">
      <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
      <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <i onClick={() => removeTask(id)} className="fas fa-times" />
    </li>
    <style jsx>{`
        .todo-item {
          font-size: 24px;
          border-bottom: 1px solid #ededed;
          min-height: 60px;
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0 16px 0 60px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        
        .text {
          font-family: 'Indie Flower', cursive;
        }
        
        .completed {
          text-decoration: line-through;
        }
        
        .completed,
        .fa-check-circle {
          color: #ccc;
        }
        
        .fa-times {
          transition: all .3s ease;
          color: rgba(175, 47, 47, 0.15);
        }
        
        .mark {
          position: absolute;
          left: 20px;
        }
        
        .todo-item:hover .fa-times {
          color: rgba(175, 47, 47, 0.9);
        }
        `}</style>
  </div>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
};

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0,
};

export default ToDoItem;
