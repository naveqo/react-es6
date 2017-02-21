import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Hello extends React.Component {
  constructor() {
    this.state = { count: 1 };
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount() {
    this.setState({ count: this.count + 1 });
  }
  render() {
    return (
      <div>
        Hello {this.props.name}
        <button onClick={this.incrementCount}>
          count={this.state.count}
        </button>
      </div>
    );
  }
}
const render = () => ReactDOM.render(<Hello />, document.getElementById('app'));
render();
