import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange (e) {
      this.props.onNameChange(e.target.value);
  }

  render () {
    //console.log(this);
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} defaultValue={this.props.playlistName}/>
        <TrackList tracks = {this.props.tracks}
          onRemove = {this.props.onRemove}
          isRemoval = {true}/>
        <a onClick ={this.props.onSave} className="Playlist-save">Save to Spotify</a>
      </div>
    );
  }
}

export default Playlist;
