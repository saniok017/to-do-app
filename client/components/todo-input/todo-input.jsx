import React from 'react';
import PropTypes from 'prop-types';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
  <div>
    <div className="todo-input-wrapper">
      <i className="fas fa-plus" />
      <input
        className="todo-input"
        placeholder="Click to add task"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    </div>
    <style jsx>{`
        .todo-input-wrapper {
          position: relative;
          border-bottom: 1px solid #ededed;
        }
        
        .todo-input {
          font-family: 'Indie Flower', cursive;
          padding: 16px 16px 16px 60px;
          border: none;
          background: rgba(0, 0, 0, 0.003);
          width: 100%;
          box-sizing: border-box;
          font-size: 28px;
          font-style: italic;
          box-shadow: inset 0 -2px 40px rgba(0,0,0,0.03);
        }
        
        .fa-plus {
          position: absolute;
          font-size: 24px;
          top: 50%;
          transform: translateY(-50%);
          left: 20px;
        }
        
        .todo-input::-webkit-input-placeholder {
          font-family: 'Indie Flower', cursive;
        }
        .todo-input::-moz-placeholder {
          font-family: 'Indie Flower', cursive;
        }
        .todo-input:-moz-placeholder {
          font-family: 'Indie Flower', cursive;
        }
        .todo-input:-ms-input-placeholder {
          font-family: 'Indie Flower', cursive;
        }
        `}</style>
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
};

export default ToDoInput;
