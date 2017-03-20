Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :feeds, only: [:show, :index, :create]
    resources :collections, except: [:new, :edit]
  end
end
