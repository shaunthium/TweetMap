# README

## Example of getting tweets:
`curl -H "Content-Type: application/json" -X POST -d '{"q":"mountain view","longitude":"37.781157","latitude":"-122.398720","radius":1,"count":3}' http://localhost:3000/api/v1/tweet/nearby_tweets`
