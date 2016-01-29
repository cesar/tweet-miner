var Twit = require('twit');
require('dotenv').config();
var pg = require('pg');

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY
  , consumer_secret: process.env.CONSUMER_SECRET
  , access_token: process.env.ACCESS_TOKEN
  , access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

//create a twitter stream
var stream = T.stream('statuses/filter', { track : 'zika'});

stream.on('tweet', function(tweet){
  console.log(tweet);
});
