/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTask,
  removeTask,
  completeTask,
  changeFilter,
  toggleTaskPriority,
} from '../../actions/actionCreator';

import saveStore from '../../saveStore';
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import Footer from '../../components/footer/footer';

const mapPriorities = tasks => tasks.map((task) => {
  let sortPriority = 3;
  if (task.priority === 'High') sortPriority = 1;
  if (task.priority === 'Medium') sortPriority = 2;
  return { ...task, sortPriority };
});

class ToDo extends Component {
  state = {
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  }

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 2 && key === 'Enter') {
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false, 'High');

      this.setState({
        taskText: '',
      });
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      case 'priority':
        return mapPriorities(tasks).sort((a, b) => a.sortPriority - b.sortPriority);
      case 'date':
        return tasks.sort((a, b) => a.id - b.id);
      default:
        return tasks;
    }
  }

  componentWillReceiveProps({ tasks, baseUrl }) {
    saveStore(tasks, baseUrl);
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const {
      tasks,
      removeTask,
      completeTask,
      filters,
      changeFilter,
      toggleTaskPriority,
    } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTasksCounter(tasks);

    return (
      <div>
      <div className="todo-wrapper">
        <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks}
        removeTask={removeTask} toggleTaskPriority={toggleTaskPriority} />}
        {isTasksExist && <Footer changeFilter={changeFilter}
          amount={taskCounter} activeFilter={filters} />}
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

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), {
  addTask,
  removeTask,
  completeTask,
  changeFilter,
  toggleTaskPriority,
})(ToDo);
