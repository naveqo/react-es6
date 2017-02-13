import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/*Storeの実装*/

// 初期Store変数（initialState)の作成
const initialState = {
  value: null,
};

// createStoreメソッドを使ってStoreの作成
const store = createStore(formReducer, initialState);


/*Storeを使用する*/

//ActionをReducerに伝播
sotre.dispatch(actionCreators());

//stateの状態を購読。状態に変化があったらリスナーを実行
store.subscribe(() => {

  // リスナーの情報を各

  // stateを取得
  sotre.getState();
});


/*Actionの定義*/

// Action名の定義
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}



function formReducer(state, action) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}


//View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick = { this.props.onClick} />
        <FormDisplay data = { this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};


//View (Presentational Components)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

//View (Presentational Components)
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}
FormDisplay.propTypes = {
  data: React.PropTypes.string,
};
