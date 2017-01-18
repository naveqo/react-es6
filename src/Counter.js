import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addValue } from './actions';

class Counter extends Component {
  render() {
    const { value, dispatchAddValue } = this.props;
    return (
      <div>
        Value: {value}
        <a href="#" onClick={e => dispatchAddValue(1)}>+1</a>
        <a href="#" onClick={e => dispatchAddValue(2)}>+2</a>
      </div>
    );
  }
}

export default connect (
  state => ({ value: state.value }),
  dispatch => ({ dispatchAddValue: amount => dispatch(addValue(amount))})
)(Counter)
