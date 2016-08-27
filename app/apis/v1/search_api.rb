module APIS
  module V1
    class SearchApi < Grape::API
      include APIS::V1::Defaults

      resource :tweet do
        desc "Get all the nearby tweets"
        params do
          requires :q, type: String
          requires :longitude, type: String
          requires :latitude, type: String
          requires :radius, type: Integer
          requires :count, type: Integer
        end
        post '/nearby_tweets' do
          secrets = Rails.application.secrets
          @client = Twitter::REST::Client.new do |config|
            config.consumer_key= secrets.twitter_consumer_key
            config.consumer_secret= secrets.twitter_consumer_secret
            config.access_token= secrets.twitter_access_token
            config.access_token_secret= secrets.twitter_access_token_secret
          end

          geo_code = "#{params[:latitude]},#{params[:longitude]},#{params[:radius]}km"
          responses = @client.search(params[:q], {geo_code: geo_code, count: params[:count]}).to_hash
          return_test = []
          responses[:statuses].each do |response|
            return_hash = {}
            return_hash[:created_at] = response[:created_at]
            return_hash[:text] = response[:text]
            return_test << return_hash
          end
          return_test.to_json
        end
      end
    end
  end
end
