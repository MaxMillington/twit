import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/helloWorldStore';
import HelloWorldContainer from '../containers/HelloWorldContainer';

const HelloWorldApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <HelloWorldContainer props={props}/>
  </Provider>
);

export default HelloWorldApp;
