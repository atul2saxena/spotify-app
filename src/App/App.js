import React, { Component } from 'react';
import './App.css';

//Import Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../util/Spotify';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = ({
      searchResults: [],
      playlistName: 'My recent tunage',
      playlistTracks: []
    });

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.searchSpotify = this.searchSpotify.bind(this);
  }

  addTrack (track) {
    /*if(this.state.playlistTracks.find(savedTrack => (track.id === savedTrack.id ))) {
      return;
    }
    */
      let tempList = this.state.playlistTracks;
      tempList.push(track);
      this.setState ({
        playlistTracks: tempList
      });
  }

  removeTrack (track) {
    let tracksToKeep = this.state.playlistTracks.filter(tracks => tracks.id !== track.id);

    this.setState ({
      playlistTracks: tracksToKeep
    });
  }

  updatePlaylistName (name) {
    this.setState ({
      playlistName: name
    });
  }

  savePlaylist (name) {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    console.log(trackURIs);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
  }

  searchSpotify (term) {
    Spotify.search(term).then(tracks => {
        this.setState ({
          searchResults: tracks
        });
    });
    //console.log('called correctly');
  }

  render() {
    //console.log(this);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.searchSpotify}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
               onAdd={this.addTrack}/>
            <Playlist playlistName = {this.state.playlistName}
              onNameChange={this.updatePlaylistName}
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
