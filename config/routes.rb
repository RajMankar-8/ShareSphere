Rails.application.routes.draw do
  resources :referrals
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
end
