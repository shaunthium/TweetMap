Rails.application.routes.draw do
  root 'application#index'
  mount APIS::Base => '/api'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
