import React from 'react';
const Button = require('react-button');
const buttonThemes = require('./../styles/buttonStyles');

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

  renderCompletedStatusSection(){
    const { isCompleted } = this.props;
    const completedStatusStyle={
      textAlign:'center',
      fontSize:20
    };

    if ( isCompleted ){
      completedStatusStyle.color = 'green';
      return (
        <td style={completedStatusStyle}>✓</td>
      )
    } else {
      completedStatusStyle.color = 'red';
      return (
        <td style={completedStatusStyle}>✗</td>
      )
    }

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
          <Button onClick={this.onSaveClick.bind(this)} theme={buttonThemes.save}>
            Save
          </Button>
          <Button onClick={this.onCancelClick.bind(this)} theme={buttonThemes.cancel}>
            Cancel
          </Button>
        </td>
      )
    }
    return (
      <td>
        <Button onClick={this.onEditClick.bind(this)} theme='' style={{borderRadius:30}}>
          Edit
        </Button>
        <Button onClick={this.props.deleteTask.bind(this,this.props.task)} theme={buttonThemes.delete}>
          Delete
        </Button>
      </td>
    )
  }

  render(){
    return (
      <tr>
        {this.renderCompletedStatusSection()}
        {this.renderTaskNameSection()}
        {this.renderButtonSection()}
      </tr>
    )
  }
}