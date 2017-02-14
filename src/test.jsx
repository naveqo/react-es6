import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const items = [
  { name: 'aaa', color: 'black' },
  { name: 'bbb', color: 'green' },
  { name: 'ccc', color: 'pink' },
  { name: 'ddd', color: 'yellow' },
];

let nameData = '';
const setNameData = (event) => {
  nameData = event.target.value;
  render();
};
const addData = () => {
  items.push({ name: nameData, color: 'black' });
  nameData = '';
  render();
};
const MyForm = () => (
  <div>
    <input type="text" value={nameData} onChange={setNameData} />
    <button onClick={addData}>Add Data</button>
  </div>
);

const Hello = ({ name, color }) => (
  <div>
    <p style={{ color }}>Hello {name}!</p>
  </div>
);

const App = () => (
  <div>
    <MyForm />
    {items.map((item) => (
      <Hello name={item.name} color={item.color} />
    ))}
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
