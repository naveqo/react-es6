import React from 'react'
import { connect } from 'react-redux'
import App from './components'
import AppActions from './actions'

var mapStateToProps = (state) => {
  return state;
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => { dispatch(AppActions.increment())}
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App)
