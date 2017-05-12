class TwitterService
  attr_reader :client

  def initialize
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV['CONSUMER_KEY']
      config.consumer_secret     = ENV['CONSUMER_SECRET']
      config.access_token        = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['ACCESS_SECRET']
    end
  end

  def get_tweets_for(user)
    client.user_timeline(user)
  end

  def user(user)
    client.user(user)
  end
end