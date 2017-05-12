json.user do
  json.id @user.id
  json.name @user.name
  json.screen_name @user.screen_name
  json.profile_image_url @user.profile_image_url
end

json.tweets @tweets do |tweet|
  json.text tweet.full_text
  json.created_at tweet.created_at
  json.favorite_count tweet.favorite_count
  json.retweet_count tweet.retweet_count
end