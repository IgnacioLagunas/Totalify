var express = require('express'); // Express web server framework
const axios = require("axios");
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

const playlists = require("./playlists")

var client_id = '86b3748d106f48d6908b32c58251fb43'; // Your client id
// var client_secret = '6a3c0b5a78844b3ea2548f18f09cb5f9'; // Your secret
var redirect_uri = 'http://localhost:4200/playlists'; // Your redirect uri

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

app.get('/artist/:id', async (req, res)=>{
  console.log(req.params.id)
  const token = "AQDU-ft09VNZSGPZaPi_MyE9K3eI5QRBhIZdD5aJaDyiBOWhBwa3B_TMxD4r2h1ONLagHMKZXbyBk0-Lvto8nRL3yVRuUDdj-wr5vnNnE7Sxei92WUiTrxVd-bzgdSwTsTfAAOXpgPXCAPMsnKmY77ILF2rgIeAbBjcCHU6y27fHlwlhdVqOaOsGqgBxpnZCRfGDjDKiAp-HT5JIZveVEgLscsHZ0Ks"
  try {
    const result = await axios.get(`https://api.spotify.com/v1/artists/${req.params.id}`,{
      headers: { Authorization: 'Bearer ' + token}
    })
    console.log(result)
    const data = await result.json()
    // console.log(data)
    // console.log('correct')
    res.json(data)
    
  } catch (error) {
    console.log(error)
    res.json({"message": "Ocurrio un error"})
  }
  // res.json(data)
})

app.listen(3000)
