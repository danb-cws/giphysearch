import React, { Component } from "react";
import * as config from "config";
import debounce from "debounce";
import "./style.css";

class Search extends Component {
  state = { searchTerm: config.default_term };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.searchTerm !== this.state.searchTerm;
  }

  onInputChange = searchTerm => {
    this.setState({ searchTerm }); // dont want to debounce this as the controlled input gets laggy
    this.debouncedOnInputChange(searchTerm);
  };

  debouncedOnInputChange = debounce(searchTerm => {
    this.props.onSearchTermChange(searchTerm);
  }, 200);

  componentDidMount() {
    if (this.state.searchTerm === "") {
      this._input.focus();
      return;
    }
    this.onInputChange(this.state.searchTerm); // if not empty, fire with initial default search term
  }

  render() {
    return (
      <label className="Search">
        <span className="Search__label">Search term</span>
        <input
          type="text"
          autoFocus="true"
          className="Search__input"
          value={this.state.searchTerm}
          onChange={e => this.onInputChange(e.target.value)}
          ref={c => (this._input = c)}
        />
      </label>
    );
  }
}

export default Search;
