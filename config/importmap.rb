# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@rails/actioncable", to: "actioncable.esm.js", preload: true
pin "@rails/activestorage", to: "activestorage.esm.js", preload: true
pin "tasks", to: "tasks.js", preload: true
