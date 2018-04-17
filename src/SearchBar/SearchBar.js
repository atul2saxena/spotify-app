import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchChange (e) {
    this.setState ({
      term: e.target.value
    });
  }

  handleSearch (e) {
    this.props.onSearch(this.state.term);
    //e.preventDefault();
  }

  render () {
    return (
      <div className="SearchBar">
        <input onChange={this.handleSearchChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.handleSearch}>Search</a>
      </div>

    );
  }
}

export default SearchBar;
