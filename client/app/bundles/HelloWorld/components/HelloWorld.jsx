import PropTypes from 'prop-types';
import React from 'react';
import Tweet from 'react-tweet'

const HelloWorld = (props) => {
  const user =  props.user ? props.user : props.props.user
  const tweets =  props.tweets ? props.tweets : props.props.tweets
  const profileImageObject = user.profileImageUrl
  const profileImageUrl = `${profileImageObject.scheme}://${profileImageObject.host}${profileImageObject.path}`

  const displayTweets = () => {
    return tweets.map((tweet, index) => {
      const tweetData = {
        id: tweet.id,
        user: {
          name: user.name,
          screen_name: user.screenName,
          profile_image_url: profileImageUrl
        },
        text: props.markovTweets[index],
        created_at: tweet.createdAt,
        favorite_count: tweet.favoriteCount,
        retweet_count: tweet.retweetCount,
      }
      return <Tweet key={index} data={tweetData}/>
    })
  }

  return (
    <div>
      {displayTweets()}
    </div>
  )
}

HelloWorld.propTypes = {
  tweets: PropTypes.any,
  user: PropTypes.any,
  props: PropTypes.any,
  markovTweets: PropTypes.array
};

export default HelloWorld;
