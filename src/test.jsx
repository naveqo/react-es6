import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const Hello = () => (
  <div>Hello</div>
);

const Hoge = () => (
  <div>
    <p>HogeHoge</p>
    <ul>
      <li>aaaa</li>
      <li>aaaa</li>
      <li>aaaa</li>
      <li>aaaa</li>
      <li>aaaa</li>
      <li>aaaa</li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <Hello />
    <Hoge />
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
