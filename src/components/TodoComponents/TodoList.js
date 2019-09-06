import React from 'react';
import Todo from './Todo';
import { Button } from 'semantic-ui-react';

const TodoList = props => {
  return (
    <div align="center">
      <Button fluid negative onClick={props.clearCompleted}>
        Clear Completed
      </Button>
      {props.tasks.map(task => (
        <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
}

export default TodoList;