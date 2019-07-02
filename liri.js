require("dotenv").config();


//axios

var axios = require("axios");

//bands in town 

var bandsUrl = "https://rest.bandsintown.com/artists/" + "Guster" + "/events?app_id=codingbootcamp";

//spotify

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

//user input from terminal 

var input = process.argv[3];

var run = process.argv[2];

//Bands in Town Api Call

function concertThis () {

console.log(bandsUrl);

axios.get(bandsUrl).then(
  function(response) {
      
      var whereWhen = response.data;
      var arrLength = whereWhen.length;
      for (var i = 0; i <arrLength; i++) {
        console.log(`
        ${whereWhen[i].venue.name}
        ${whereWhen[i].venue.city}
        ${whereWhen[i].datetime}
        `);
      }
  })
  .catch(function(error) {
    if (error.response) {
      
  };
  });

};

concertThis();




//spotify API call 

function spotifyThisSong () {

spotify
  .search({ type: 'track', query: input })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
};