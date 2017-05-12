import { connect } from 'react-redux';
import Tweets from '../components/Tweets';
import * as actions from '../actions/tweetsActionCreators'

const mapStateToProps = (state) => ({
  name: state.name,
  user: state.user,
  tweets: state.tweets,
  markovTweets: state.markovTweets
});

export default connect(mapStateToProps, actions)(Tweets);
