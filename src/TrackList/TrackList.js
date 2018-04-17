import React from 'react';
import './TrackList.css';
import Tracks from '../Tracks/Tracks';

class TrackList extends React.Component {

  render () {
    //console.log(this);
    return (
      <div className="TrackList">
        {
          this.props.tracks.map(track => {
            return <Tracks key={track.id}
              track={track}
              onAdd={this.props.onAdd}
              onRemove = {this.props.onRemove}
              isRemoval = {this.props.isRemoval}/>
          })
        }
      </div>
    );
  }
}

export default TrackList;
