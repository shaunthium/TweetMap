require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsToyApp
  class Application < Rails::Application
    config.autoload_paths += %W(#{config.root}/lib #{Rails.root}/app)
    config.webpack = {
       use_manifest: false,
       asset_manifest: {},
       common_manifest: {}
    }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
