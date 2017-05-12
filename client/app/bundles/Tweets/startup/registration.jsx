import ReactOnRails from 'react-on-rails';

import TweetsApp from './TweetsApp';

// This is how react_on_rails can see the Tweets in the browser.
ReactOnRails.register({
  TweetsApp,
});
