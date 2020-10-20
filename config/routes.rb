Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :parks, only: [:show]
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]

    resources :users, only: [:create]

    resources :trails, only: [:show]

    resources :parks, only: [:show, :index] do
      # resources :trails, only: [:index]
    end

  end
  
  root to: "static_pages#root"
end
