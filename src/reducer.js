import { ADD_VALUE } from './actions';

export default (state = {value: 0}, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, value: state.value + action.payload };
    default:
      return state;  
  }
}
