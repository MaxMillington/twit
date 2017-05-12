import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/tweetsStore';
import TweetsContainer from '../containers/tweetsContainer';

const TweetsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <TweetsContainer props={props}/>
  </Provider>
);

export default TweetsApp;
