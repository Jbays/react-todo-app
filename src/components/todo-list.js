import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './todo-list-header';
import ToDosListItem from './todos-list-item';

export default class ToDoList extends React.Component {

  renderListItem() {
    const props = _.omit(this.props,'todos');

    return (
      _.map(this.props.todos,(todo,index)=>
        <ToDosListItem key={index}{...todo}{...props} />)
    )
  }

  render() {
    return (
      <table>
        <ToDosListHeader />
          <tbody>
            {this.renderListItem()}
          </tbody>
      </table>
    )
  }
}