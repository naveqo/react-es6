import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const items = [
  { name: 'aaa', color: 'black'},
  { name: 'bbb', color: 'green'},
  { name: 'ccc', color: 'pink'},
  { name: 'ddd', color: 'yellow'}
];

const Hello = ({name,color}) => (
  <div>
    <p style={{color}}>Hello {name}</p>
  </div>
);

const App = () => (
  <div>
    {items.map((item) => (
      <Hello name={item.name} color={item.color} />
    ))}
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
