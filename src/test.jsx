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

let nameData = '';
const setNameData =(event) => {
  nameData = event.target.value;
  render();
};

const addData = () => {
  items.push({ name: nameData, color: 'black'});
  nameData = '';
  render();
};

const MyForm = () => (
  <div>
    <input type="text" value={nameData} onChange={setNameData} />
    <button onClick={addData}>Add Data</button>
  </div>
);

const Hello = ({ name, color}) => (
  <div>
    <p style={{color}}>Hello {name}!</p>
  </div>
);

const Hello2 = ({ name, color, onDelete }) => (
  <div>
    <p>
      <span style={{ color }}>Hello {name}!</span>
      <button onClick={() => onDelete()}>Delete</button>
    </p>
  </div>
);

const deleteItem = (index) => {
  items.splice(index, 1);
  render();
};

const App = () => (
  <div>
    <MyForm />
    {items.map((item, index) => (
      <Hello2 name={item.name} color={item.color} onDelete={() => deleteItem(index)}/>
    ))}
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
