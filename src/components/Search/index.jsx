import React, { Component } from "react";
import * as config from "../../config";
import debounce from "debounce";
import "./style.css";

class Search extends Component {
  state = { searchTerm: config.default_term };

  onInputChange = searchTerm => {
    this.setState({ searchTerm }); // dont want to debounce this as the controlled input gets laggy
    this.debouncedOnInputChange(searchTerm);
  };

  debouncedOnInputChange = debounce(searchTerm => {
    this.props.onSearchTermChange(searchTerm);
  }, 200);

  componentDidMount() {
    this.onInputChange(this.state.searchTerm); // fire with initial default search term
  }

  render() {
    return (
      <label className="Search">
        <span className="Search__label">Search term</span>
        <input
          type="text"
          autoFocus
          className="Search__input"
          value={this.state.searchTerm}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </label>
    );
  }
}

export default Search;
