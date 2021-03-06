source 'https://rubygems.org'
ruby '2.5.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.11.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.11'

# Use Puma as the app server
gem 'puma', '3.12.4'

# A set of responders modules
gem 'responders', '~> 2.3'

# Use Angular templates with Rails' Asset Pipeline
gem 'angular-rails-templates'

# Rails integration for AngularJS style CSRF protection
gem 'angular_rails_csrf', '~> 2.0'

# Flexible authentication solution for Rails with Warden
gem 'devise', '4.7.1'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Testing framework for Rails
  gem 'rspec-rails', '~> 3.5'

  # Fixtures replacement
  gem 'factory_girl_rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # A static analysis security vulnerability scanner for Ruby on Rails applications
  gem 'brakeman', require: false

  # A Ruby static code analyzer, based on the community Ruby style guide
  gem 'rubocop', '~> 0.45.0', require: false
end

group :test do
  # Code coverage analysis tool for Ruby
  gem 'simplecov', require: false

  # Collection of testing matchers extracted from Shoulda
  gem 'shoulda-matchers', '~> 3.1'
end

# Enable all Heroku platform features
gem 'rails_12factor', group: :production
