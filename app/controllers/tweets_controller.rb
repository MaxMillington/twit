class TweetsController < ApplicationController
  def index
    ts = TwitterService.new
    input = params[:input] ? params[:input] : 'jimmyfallon'
    @tweets = ts.get_tweets_for(input)
    @user = ts.user(input)
    @markov_tweets = MarkovService.new.perform(@tweets)
  end
end
