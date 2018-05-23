Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:new, :create, :destroy]
    resources :users do
      resources :follows, only: [:create, :destroy]
    end
    resources :items
    resources :collections
  end

  get 'api/demoLogin', to: 'api/sessions#demoLogin'
  get 'api/profile/:id', to: 'api/items#profile'
  get 'api/searches', to: 'api/searches#query'

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
