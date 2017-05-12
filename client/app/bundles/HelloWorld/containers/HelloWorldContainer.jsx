import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld';
import * as actions from '../actions/helloWorldActionCreators'

const mapStateToProps = (state) => ({
  name: state.name,
  user: state.user,
  tweets: state.tweets,
  markovTweets: state.markovTweets
});

export default connect(mapStateToProps, actions)(HelloWorld);
