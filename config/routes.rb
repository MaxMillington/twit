Rails.application.routes.draw do
  root to: 'tweets#index'
  get 'tweets', to: 'tweets#index'
end
