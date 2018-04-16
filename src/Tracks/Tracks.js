import React from 'react';
import './Tracks.css';

class Tracks extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
  }

  //not sure if this is done correctly
  renderAction (isRemoval) {
    return isRemoval ? '-' : '+';
  }

  addTrack(e) {
    //dont thnk this was done correctly. Step 45
    this.props.onAdd(this.props.track);
  }


  render() {
    console.log(this);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a onClick={this.props.addTrack} className="Track-action">{this.renderAction()}</a>
      </div>
    )

  }
}

export default Tracks;
