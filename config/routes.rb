Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :parks, only: [:show]
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]

    resources :users, only: [:create, :show, :update] do
      # resources :reviews, only: :index
    end

    resources :trails, only: [:show] do
      resources :reviews, only: [:index]
    end


    resources :parks, only: [:show, :index] do
      resources :trails, only: [:index]
    end

    resources :reviews, only: [:create, :update, :destroy]

  end
  
  root to: "static_pages#root"
end
