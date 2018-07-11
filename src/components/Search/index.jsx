import React, { Component } from "react";
import * as config from "../../config";
import debounce from "debounce";
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: config.default_term };
  }

  onInputChange = searchTerm => {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  };

  debouncedOnInputChange = debounce(searchTerm => {
    this.onInputChange(searchTerm);
  }, 100); // any higher than 100 and it makes the controlled input very laggy

  render() {
    return (
      <input
        autoFocus
        className="SearchInput"
        value={this.state.searchTerm}
        //onChange={e => this.onInputChange(e.target.value)}
        onChange={e => this.debouncedOnInputChange(e.target.value)}
      />
    );
  }
}

export default Search;
