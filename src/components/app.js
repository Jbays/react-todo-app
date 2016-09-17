import React from 'react';
import CreateToDo from './create-todo';
import TodoList from './todo-list';

const todos = [
  {
    task:'finish mvp for todo-app using react',
    isCompleted: false
  },
  {
    task:'eat breakfast',
    isCompleted: true
  },
  {
    task:'get black belt',
    isCompleted: false
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

  toggleTask(task){
    const foundTodo = _.find(this.state.todos,todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos:this.state.todos});
  }

  saveTask(oldTask,newTask){
    const foundTodo = _.find(this.state.todos,todo => todo.task === oldTask);

    foundTodo.task = newTask;
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
          toggleTask={this.toggleTask.bind(this)}
          saveTask ={this.saveTask.bind(this)}
        />
      </div>
    );
  }
}