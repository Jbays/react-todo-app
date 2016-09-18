import React from 'react';

export default class ToDosListHeader extends React.Component {
  render(){
    return (
      <thead>
        <tr>
          <th style={{fontSize:20}}>Task Title</th>
          <th style={{fontSize:20}}>Actions</th>
        </tr>
      </thead>
    );
  }
}