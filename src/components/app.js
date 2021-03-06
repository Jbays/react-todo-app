import React from 'react';
import CreateToDo from './create-todo';
import TodoList from './todo-list';

const todos = [
  {
    task:'This is your first task.  Green means completed.',
    isCompleted: true
  },
  {
    task:'Your second task.  Red means uncompleted.',
    isCompleted: false
  },
  {
    task:'Click task to toggle between completed/uncompleted',
    isCompleted: true
  },
  {
    task: 'Click "edit" to change task title. Click "save" to keep changes.',
    isCompleted:false,
  },
  {
    task: 'Click "edit" to change task title. Click "cancel" to discard changes.',
    isCompleted:false,
  },
  {
    task: 'Click "delete" to remove task',
    isCompleted:false,
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
    const foundTodo = _.find(this.state.todos,
      todo => todo.task === task
    );
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos:this.state.todos});
  }

  saveTask(oldTask,newTask){
    const foundTodo = _.find(this.state.todos,
      todo => todo.task === oldTask
    );

    foundTodo.task = newTask;
    this.setState({todos:this.state.todos});
  }

  deleteTask(taskToDelete){
    _.remove(this.state.todos,
      todo=> todo.task === taskToDelete
    );
    this.setState({todos:this.state.todos});
  }

  render(){
    return (
      <div>
        <h1 style={{fontSize:40,textAlign:'center'}}>React-ToDo-App</h1>
        <CreateToDo
          createTask={this.createTask.bind(this)}
          todos={this.state.todos}
        />
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask ={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }
}