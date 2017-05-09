import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import helloWorldReducer from '../reducers/helloWorldReducer';

const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps, applyMiddleware(thunkMiddleware))
);

export default configureStore;
