import { combineReducers } from 'redux';
import { NAME_SUBMITTED, INFO_RECEIVED, NAME_UPDATE } from '../constants/helloWorldConstants';

const user = (state = '', action) => {
  switch (action.type) {
    case INFO_RECEIVED:
      return action.data.user;
    default:
      return state;
  }
};

const name = (state = '', action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const tweets = (state = '', action) => {
  switch (action.type) {
    case INFO_RECEIVED:
      return action.data.tweets;
    default:
      return state;
  }
};

const markovTweets = (state = '', action) => {
  switch (action.type) {
    case INFO_RECEIVED:
      return action.data.markovTweets;
    default:
      return state;
  }
};

const helloWorldReducer = combineReducers({ name, user, tweets, markovTweets });

export default helloWorldReducer;
