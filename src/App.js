import React, { Component } from "react";
import Search from "./components/search";
import Player from "./components/player";
import ResultList from "./components/result_list";
import * as config from "./config";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gifs: [], selectedItem: 0 };

    this.GiphySearchHandler();
  }

  GiphySearchHandler(term = config.default_term) {
    return fetch(
      `${config.GIPHY_ENDPOINT}${encodeURI(term)}&api_key=${
        config.GIPHY_API_KEY
      }&limit=${config.MAX_RESULTS}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(json => {
        return json.data;
      })
      .then(gifs => this.setState({ gifs }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphysearch, a React Demo by Dan B</h1>
        </header>
        <Search
          onSearchTermChange={searchTerm => this.GiphySearchHandler(searchTerm)}
        />
        <ResultList gifs={this.state.gifs} />
        <Player gifs={this.state.gifs} selectedItem={this.state.selectedItem} />
      </div>
    );
  }
}

export default App;
