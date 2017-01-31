import { createStore } from 'redux';

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
