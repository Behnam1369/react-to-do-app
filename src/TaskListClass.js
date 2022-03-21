import React from 'react';

class TaskList extends React.PureComponent {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };
  render() {
    return (
      <>
        <h1>Hello React</h1>
      </>
    );
  }
}

export default TaskList;
