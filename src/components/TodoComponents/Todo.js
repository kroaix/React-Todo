import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

const Todo = props => {
  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => props.toggleTask(props.task.id)}
    >
      <Segment color="grey" align="center">
        <Icon name="check" />{props.task.task}
      </Segment>
    </div>
  );
};

export default Todo;