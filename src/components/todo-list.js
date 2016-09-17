import _ from 'lodash';
import React from 'react';
import ToDoListHeader from './todo-list-header';
import ToDoListItem from './todo-list-item';


export default class ToDoList extends React.Component {

  renderItems() {
    console.log("renderItems() is being invoked!");
    return _.map(this.props.todos, (todo, index)=> <ToDoListItem key={index
    } {...todo} />);
  }

  render(){
    return (
      <table>
        <ToDoListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
    );
  }
}