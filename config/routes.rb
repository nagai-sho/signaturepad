Rails.application.routes.draw do
  root to: 'signatures#index'
  resources :signatures
end
