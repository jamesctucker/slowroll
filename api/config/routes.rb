Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  scope :api, :defaults => { :format => 'json' } do
    scope :v1 do
      resources :posts
      devise_for :users, controllers: { sessions: 'users/sessions' }
      devise_scope :user do
        # post 'users/sign_in' => 'sessions#create'
        get 'users/current' => 'sessions#show'
      end
    end
  end 
end
