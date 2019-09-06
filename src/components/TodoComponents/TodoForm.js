import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
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
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="task"
            value={this.state.taskName}
            onChange={this.handleChanges}
            placeholder="Add Task"
            icon="pencil"
            iconPosition="left"
            required
          />
          <Button positive fluid type="submit" icon="plus">
          </Button>
        </Form.Field>
      </Form>
    );
  }
}



export default TodoForm;