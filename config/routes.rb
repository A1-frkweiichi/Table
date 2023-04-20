Rails.application.routes.draw do
  get 'table/tasks', to: 'table#tasks'
  get 'table/onclick', to: 'table#onclick'
end
