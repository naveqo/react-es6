import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-dom';
import {createStore} from 'redux';

console.log(createStore);
import App from './containers.js'
import reducer from './reducers.js'


const store = createStore(reducer)
const element = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);
