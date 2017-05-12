import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import tweetsReducer from '../reducers/tweetsReducer';

const configureStore = (railsProps) => (
  createStore(tweetsReducer, railsProps, applyMiddleware(thunkMiddleware))
);

export default configureStore;
