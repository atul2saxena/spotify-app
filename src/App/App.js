import React, { Component } from 'react';
import './App.css';

//Import Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


const trackInfo = {
  id: '',
  title: 'Easy',
  artist: 'Mat Zo and Porter Robinson',
  album: 'unknown'
};

const tracks = [trackInfo,
                  trackInfo,
                  trackInfo,
                  trackInfo,
                  trackInfo,
                  trackInfo];

class App extends Component {
  constructor (props) {
    super(props);

    this.state = ({
      searchResults: tracks,
      playlistName: 'My recent tunage',
      playlistTracks: [{
        id: '',
        title: '',
        artist: '',
        album: ''
      }]
    });

    this.addTrack = this.addTrack.bind(this);
  }

  addTrack (track) {
    if(this.state.playlistTracks.find(savedTrack => (
        track.id === savedTrack.id ))) {
          return;
        }
    this.setState ({
      playlistTracks: track
    });
  }

  removeTrack (track) {
    let tracksToKeep = this.state.playlistTracks.filter(tracks => tracks.id !== track.id);

    this.setState ({
      playlistTracks: tracksToKeep
    });
  }

  render() {
    //console.log(this);
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
               onAdd={this.addTrack}/>
            <Playlist playlist={this.state.playlistName}
              tracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
