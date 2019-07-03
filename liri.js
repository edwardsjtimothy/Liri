require("dotenv").config();

//user input from terminal 

var input = process.argv[3];
var run = process.argv[2];
console.log(process.argv);

//write to text file 

var fs = require("fs");

//axios

var axios = require("axios");

//ombd url

var movieUrl = "http://www.omdbapi.com/?t=" + input + "&apikey=trilogy";

//bands in town url

var bandsUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

//spotify

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

//Bands in Town Api Call

function concertThis() {

  console.log(input);
  console.log(bandsUrl);

  axios.get(bandsUrl).then(
    function (response) {

      var whereWhen = response.data;
      var arrLength = whereWhen.length;
      for (var i = 0; i < arrLength; i++) {
        console.log(`
        ${whereWhen[i].venue.name}
        ${whereWhen[i].venue.city}
        ${whereWhen[i].datetime}
        `);
      }
    })
    .catch(function (error) {
      if (error.response) {

      };
    });

};


//spotify API call 

function spotifyThis() {

  spotify
    .search({ type: 'track', query: input })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (err) {
      console.log(err);
    });
};

//omdb API call 


function movieThis() {

  console.log(movieUrl);

  axios.get(movieUrl).then(
    function (response) {

      var movieInfo = response.data

      console.log(`

Title: ${movieInfo.Title}
Year Released: ${movieInfo.Year}
IMDB Rating: ${movieInfo.imdbRating}
Rotten Tomatoes: ${movieInfo.Ratings[1].Value}
Country: ${movieInfo.Country}
Language: ${movieInfo.Language}
Plot: ${movieInfo.Plot}
Actors: ${movieInfo.Actors}

    `);
    })

    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {

        console.log("Error", error.message);
      }
      console.log(error.config);
    });

};


//read random.txt and determine output 

function doWhatItSays() {

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

  
  var dataArr = data.split(",");

  console.log(dataArr);


});
};

// switch to select which api to run 
switch (run) {

  //concert search 
  case "concert-this":
    concertThis();
    break;

  //song search
  case "spotify-this-song":
    spotifyThis();
    break;

  //movie search
  case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
      doWhatItSays();
      break;

};

doWhatItSays();