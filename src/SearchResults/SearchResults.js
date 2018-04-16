import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
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
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks = {this.props.searchResults} onAdd = {this.props.onAdd}/>
      </div>
    );
  }
}

export default SearchResults;
