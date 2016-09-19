import React from 'react';
const Button = require('react-button');

export default class ToDosList extends React.Component {
  constructor(props){
    super(props);

    this.state={
      error:null
    };
  }

  handleCreate(event){
    event.preventDefault();

    //assigns createInput to input text box
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput){
      this.setState({error:validateInput});
      return;
    }

    this.setState({error:null});
    this.props.createTask(task);
    this.refs.createInput.value='';
  }

  validateInput(task){
    if (!task){
      return 'Please enter a task'
    } else if ( _.find(this.props.todos, todo => todo.task === task) ){
      return 'Task already exists'
    } else {
      return null;
    }
  }

  renderError(){
    //if no error, return nothing
    if (!this.state.error){return null;}
    return (
      <div style={{color:'red'}}>
        {this.state.error}
      </div>
    )
  }

  render(){
    return (
      <form onSubmit={this.handleCreate.bind(this)}
            style={{textAlign:'center',marginBottom:10}}>
        <input type="text"
               placeholder="  Input Task Title Here"
               ref="createInput"
               style={{height: 27, borderColor: 'gray', borderWidth: .5,fontSize:25,marginRight:5}}/>
        <Button theme="primary" style={{borderRadius:30,fontSize:20}}>Create</Button>
        {this.renderError()}
      </form>
    );
  }
}