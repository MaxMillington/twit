class MarkovService
  def perform(tweets)
    tweets_text_with_no_urls = tweets.map { |tweet| tweet.full_text }.join.gsub(/(?:f|ht)tps?:\/[^\s]+/, '')
    sentences = Generator.new(tweets_text_with_no_urls).get_sentences(40)
    two_sentence_long_tweets = sentences.each_slice(2).to_a.map {|array| array.join }
  end
end