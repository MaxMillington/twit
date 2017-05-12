import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE, CALCULATION_RECEIVED } from '../constants/helloWorldConstants';

const user = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const tweets = (state = '', action) => {
  switch (action.type) {
    case CALCULATION_RECEIVED:
      return action.data.tweets;
    default:
      return state;
  }
};

const markovTweets = (state = '', action) => {
  switch (action.type) {
    case CALCULATION_RECEIVED:
      return action.data.tweets;
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ user, tweets, markovTweets });

export default helloWorldReducer;
