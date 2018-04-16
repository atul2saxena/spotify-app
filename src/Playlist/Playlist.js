import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    //this.handleTermChange = this.handleTermChange.bind(this);
  }

  render () {
    console.log(this);
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistName}/>
        <TrackList tracks = {this.props.tracks} />
        <a className="Playlist-save">Save to Spotify</a>
      </div>
    );
  }
}

export default Playlist;
