import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

class ToDo extends Component {
  state = {
    activeFilter: 'all',
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === 'Enter') {
      // eslint-disable-next-line no-shadow
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: '',
      });
    }
  }

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks } = this.props;
    const isTasksExist = tasks && tasks.length > 0;

    return (
      <div>
        <div className="todo-wrapper">
          <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
          {isTasksExist && <ToDoList tasksList={tasks} />}
          {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
        </div>

        <style jsx>{`
        .todo-wrapper {
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          background-color: #fff;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                      0 25px 50px 0 rgba(0, 0, 0, 0.1);
        }
        `}</style>
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTask })(ToDo);
