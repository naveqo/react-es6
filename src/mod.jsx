import React from 'react';

export default class Mod extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.time}</li>
          <li>{this.props.hoge}</li>
        </ul>
      </div>
    );
  }
}
