import React from 'react';
const Button = require('react-button');

export default class ToDosList extends React.Component {
  constructor(props){
    super(props);

    this.state={
      error:null
    };
  }

  /**
   * @name: handleCreate
   * @description: Grab info from input-text field
   **              Validate task
   **              If invalid, show error-messages
   **              If valid (1) remove any error-message
   **                       (2) create task
   **                       (3) empty input-text field
   * @param:  event (Proxy object)
   */

  handleCreate(event){
    event.preventDefault();

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

  /**
   * @name: validateInput
   * @description: returns error if task is falsy
   **              returns error if task is not unique
   **              else returns nothing
   * @param: task (string)
   */

  validateInput(task){
    if (!task){
      return 'Please enter a task'
    } else if ( _.find(this.props.todos, todo => todo.task === task) ){
      return 'Task already exists'
    } else {
      return null;
    }
  }

  /**
   * @name: renderError
   * @description: if this.state.error is falsy return NO error
   **              else return error-message in red
   * @param: none
   */

  renderError(){
    if (!this.state.error){return null;}
    return (
      <div style={{color:'red'}}>
        {this.state.error}
      </div>
    )
  }

  /**
   * @name: render
   * @description: returns(
   **                the form which contains:
   **                1. input-text field for taskNames (string)
   **                2. create button
   **                3. renders error-messages (if applicable)
   **              (
   * @param: none
   */

  render(){
    return (
      <form onSubmit={this.handleCreate.bind(this)}
            style={{textAlign:'center',marginBottom:10}}>
        <input type="text"
               placeholder="  Input Task Title Here"
               ref="createInput"
               style={{height: 27, borderColor: 'gray', borderWidth: .5,fontSize:20,marginRight:5}}/>
        <Button theme="primary" style={{borderRadius:30,fontSize:20}}
                onClick={this.handleCreate.bind(this)}>Create</Button>
        {this.renderError()}
      </form>
    );
  }
}