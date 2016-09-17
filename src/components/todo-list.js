import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './todo-list-header';
import ToDosListItem from './todos-list-item';

export default class ToDoList extends React.Component {

  renderItems() {
    return (
      _.map(this.props.todos,(todo,index)=>
        <ToDosListItem key={index}{...todo} />)
    )
  }

  render() {

    return (
      <table>
        <ToDosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
    )
  }
}