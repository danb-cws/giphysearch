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
    this.debouncedOnInputChange(searchTerm);
  };

  debouncedOnInputChange = debounce(searchTerm => {
    this.props.onSearchTermChange(searchTerm);
  }, 200);

  render() {
    return (
      <input
        autoFocus
        className="SearchInput"
        value={this.state.searchTerm}
        onChange={e => this.onInputChange(e.target.value)}
      />
    );
  }
}

export default Search;
