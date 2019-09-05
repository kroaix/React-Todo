import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state= {
      taskName: ""
    };
  }


  handleChanges = e => {
    this.setState({ taskName: e.target.value });
  }

  handleSubmit = e => {
    this.props.addTask(e, this.state.taskName);
    this.setState({ taskName: "" });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>ADD</button>
      </form>
    )
  }
}



export default TodoForm;