import React from 'react';
import {render} from 'react-dom';
import Mod from './mod.jsx';

const element = document.getElementById('root');

export default class App extends React.Component {
  render () {
  let timestamp = new Date().toString();
    return (
      <Mod name='jason' time={timestamp} hoge='hogehoge'/>
    );
  }
}

render(
  <App />,
  element
);
