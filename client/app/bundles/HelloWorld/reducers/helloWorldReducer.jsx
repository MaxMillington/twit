import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE, CALCULATION_RECEIVED } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const output = (state = '', action) => {
  switch (action.type) {
    case CALCULATION_RECEIVED:
      return action.data.output;
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ name, output });

export default helloWorldReducer;
