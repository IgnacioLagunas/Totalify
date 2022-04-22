var express = require('express'); // Express web server framework
const axios = require("axios");
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var SpotifyWebApi = require('spotify-web-api-node');

const playlists = require("./playlists")

var client_id = '86b3748d106f48d6908b32c58251fb43'; // Your client id
// var client_secret = '6a3c0b5a78844b3ea2548f18f09cb5f9'; // Your secret
var redirect_uri = 'http://localhost:4200/playlists'; // Your redirect uri
const spotifyUrl = '${spotifyUrl}'

var spotifyApi = new SpotifyWebApi()

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/playlists', (req, res)=>{
  res.json({
    playlists: playlists
  })
})

app.get('/artist/:artistId', (req, res)=>{
  const token = req.headers.token
  console.log('token:', token)
  // axios.get(`${spotifyUrl}/artists/${req.params.id}`,{
  //   headers: { 
  //     Authorization: 'Bearer ' + token,
  //     Host: 'api.spotify.com'
  //   }
  // })
  // .then(data=>{
  //   console.log(data)
  //   res.json(data)
  // })
  // .catch(error=>{res.json(error)})
  spotifyApi.setAccessToken(token)
  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
    function(data) {
      console.log('Artist albums', data.body);
    },
    function(err) {
      console.error(err);
    }
  );
})

app.get('/artist/:artistId/albums', (req, res)=>{
  const token = req.headers.token
  axios.get(`${spotifyUrl}/artists/${req.params.artistId}/albums`,{
    headers: { 
      Authorization: 'Bearer ' + token,
      Host: 'api.spotify.com'
    }
  })
  .then(data=>{
    console.log(data)
    res.json(data)
  })
  .catch(error=>{res.json(error)})
})

app.get('/album/:albumId', (req, res)=>{
  const token = req.headers.token
  axios.get(`${spotifyUrl}/albums/${req.params.albumId}`,{
    headers: { 
      Authorization: 'Bearer ' + token,
      Host: 'api.spotify.com'
    }
  })
  .then(data=>{
    console.log(data)
    res.json(data)
  })
  .catch(error=>{res.json(error)})
})

app.listen(3000)
