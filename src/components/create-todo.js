import React from 'react';

export default class ToDosList extends React.Component {

  handleCreate(event){
    event.preventDefault();

    // console.log(this.props.createTask);
    this.props.createTask(this.refs.createInput.value);
  }

  render(){

    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button>Create</button>
      </form>
    );
  }
}