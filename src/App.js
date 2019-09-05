import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

const tasks = [
  {
    task: '',
    id: '',
    completed: false
  }
]

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, taskName) => {
    e.preventDefault();
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false 
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return{ ...task, completed: !task.completed };
        }
        return task;
      })
    });
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List:</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
