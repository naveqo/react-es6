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

const MyButton = () => (
  <div>
    <button onClick={() => alert('clicked')}>Click Me</button>
  </div>
);


let textData = '';
const setTextData = (event) => {
  textData = event.target.value;
  if (!isNaN(textData)) {
    textData = "";
    console.log(Number.isNaN(textData));
  } else {
    textData = textData.toUpperCase();
  }
  render();
};
const MyBox = () => (
  <div>
    <input type="text" value={textData} onChange={setTextData}/>
  </div>
);


const App = () => (
  <div>
    <MyBox />
  </div>
);

const render = () => ReactDOM.render(<App />, document.getElementById('app'));
render();
