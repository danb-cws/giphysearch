import React, { Component } from "react";
import * as config from "../../config";
import "./style.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: config.default_term };
  }

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

  onInputChange = searchTerm => {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  };
}

export default Search;
