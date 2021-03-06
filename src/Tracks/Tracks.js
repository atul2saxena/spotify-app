import React from 'react';
import './Tracks.css';

class Tracks extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction () {
    if(this.props.isRemoval) {
      return (<a className="Track-action" onClick={this.removeTrack}>-</a>);
    } else {
      return (<a className="Track-action" onClick={this.addTrack}>+</a>);
    }
  }

  addTrack(e) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(e) {
    this.props.onRemove(this.props.track);
  }

  render() {
    //console.log(this);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
          {this.renderAction()}
      </div>
    )

  }
}

export default Tracks;
