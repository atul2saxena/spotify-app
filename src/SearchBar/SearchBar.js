import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    //this.handleTermChange = this.handleTermChange.bind(this);
  }
/*
  handleTermChange (e) {
    this.setState ({
      term: e.target.value
    });
  }
*/
  render () {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>Search</a>
      </div>

    );
  }
}

export default SearchBar;
