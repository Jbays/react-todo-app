import React from 'react';
import CreateToDo from './create-todo';
import TodoList from './todo-list';

const todos = [
  {
    task:'make React todo App',
    isCompleted: false
  },
  {
    task:'eat breakfast',
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos
    }
  }

  createTask(task){
    this.state.todos.push({
      task,
      isCompleted:false
    });
    this.setState({todos:this.state.todos});
  }

  render(){
    return (
      <div>
        <h1>React ToDo App</h1>
        <CreateToDo
          createTask={this.createTask.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}