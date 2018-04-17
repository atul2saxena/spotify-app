
const clientID = '1f1ba8234ff941ce9da182097f329d68';
//const clientSecret = 'c8b0d2a9bbfa44ac9a50976f5ef415bb';
var accessToken = '';
const redirectURI = 'http://localhost:3000/';

const Spotify = {
  getAccessToken () {
    if(accessToken) {
      //console.log(accessToken);
      return accessToken;
    } else if (window.location.href.match (/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      var expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      //console.log(accessToken);
      return accessToken;
    } else {

      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      //console.log(accessToken);
      window.location = url;
    }

  },

  savePlaylist (playlistName, trackURIs) {
    if(!playlistName || !trackURIs) {
      return;
    }
    //console.log('hello');
    accessToken = Spotify.getAccessToken();
    var headers = {Authorization: `Bearer ${accessToken}`};
    var userID;

    return fetch(`https://api.spotify.com/v1/me`,
      {headers: headers}
    ).then(response => {
      //console.log(response);
      return response.json();
    }).then(jsonResponse => {
        //console.log(jsonResponse);
        if(jsonResponse.id) {
          //console.log(jsonResponse.id);
          userID = jsonResponse.id;
          //console.log(userID);

          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
            {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({name: playlistName})
            }
          ).then(response => {
            //console.log(response);
            return response.json();
          }).then(jsonResponse => {
            //console.log(jsonResponse);
            let playlistID = jsonResponse.id;

            fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
              {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({uris: trackURIs})
              }
            ).then(response => {
              //console.log(response);
              return response.json();
            }).then(jsonResponse => {
              //console.log(jsonResponse);
            })
          });
        }
      });
  },

  search (term) {
    accessToken = Spotify.getAccessToken();

    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
    {headers: {Authorization: `Bearer ${accessToken}`}}
    ).then(response => {
      //console.log(response);
      return response.json();
    }).then(jsonResponse => {
      //console.log(jsonResponse);
      if(jsonResponse.tracks) {
        //console.log(jsonResponse.tracks);
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      }
    });
  }
};

export default Spotify;
