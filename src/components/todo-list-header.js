import React from 'react';

export default class ToDosListHeader extends React.Component {
  render(){
    return (
      <thead>
        <tr>
          <th style={{fontSize:20,textAlign:'center'}}>Completed</th>
          <th style={{fontSize:20,textAlign:'center'}}>Task Title</th>
          <th style={{fontSize:20,textAlign:'center'}}>Actions</th>
        </tr>
      </thead>
    );
  }
}