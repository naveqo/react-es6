import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


const Hello = ({name,color}) => (
  <div>
    <p style={{color}}>Hello {name}</p>
  </div>
);

const App = () => (
  <div>
    <Hello name="World" color="blue" />
    <Hello name="Ebisu" color="red" />
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
