class HelloWorldController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    ts = TwitterService.new
    @tweets = ts.get_tweets_for('jimmyfallon')
    @user = ts.user('jimmyfallon')
    @markov_tweets = MarkovService.new.perform(@tweets)
  end
end
