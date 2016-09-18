import React from 'react';
const Button = require('react-button');

let themes = {
  delete: {
    style:{color:'red'},
    disabledStyle: { background: 'red'},
    overStyle: { color: 'white',background: 'red'},
    activeStyle: { background: 'red'},
    pressedStyle: {background: 'red', fontWeight: 'bold'},
    overPressedStyle: {background: 'red', fontWeight: 'bold'}
  }
};

export default class ToDosListItem extends React.Component {
  constructor(props){
    super(props);

    this.state={
      isEditing:false
    }
  }

  onEditClick(){
    this.setState({isEditing:true});
  }

  onCancelClick(){
    this.setState({isEditing:false});
  }

  onSaveClick(event){
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask,newTask);
    this.setState({isEditing:false});
  }

  renderTaskNameSection(){
    const { task, isCompleted } = this.props;

    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if (this.state.isEditing){
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"/>
          </form>

        </td>
      )
    }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this,task)}>
        {task}
      </td>
    );
  }

  renderButtonSection(){
    if (this.state.isEditing){
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      )
    }
    return (
      <td>
        <Button theme="default" onClick={this.onEditClick.bind(this)}>Edit</Button>
        <Button theme={themes.delete} onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</Button>
      </td>
    )
  }

  render(){
    return (
      <tr>
        {this.renderTaskNameSection()}
        {this.renderButtonSection()}
      </tr>
    )
  }
}