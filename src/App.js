import React, { Component } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import Player from "./components/Player";
import ResultList from "./components/ResultList";
import * as config from "./config";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedItem: 0,
      isLoaded: true
    };
  }

  componentDidMount(){
    this.giphySearchHandler();
  }

  giphySearchHandler(term = config.default_term) {
    this.setState({ isLoaded: false });
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
      .then(gifs => this.setState({ gifs, selectedItem: 0, isLoaded: true }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphysearch, a React Demo by Dan B</h1>
        </header>
        <Search
          onSearchTermChange={searchTerm => this.giphySearchHandler(searchTerm)}
        />
        <ResultList
          gifs={this.state.gifs}
          selectedItem={this.state.selectedItem}
          onItemSelect={index => this.setState({ selectedItem: index })}
        />
        <Spinner isLoaded={this.state.isLoaded} />
        <Player gifs={this.state.gifs} selectedItem={this.state.selectedItem} isLoaded={this.state.isLoaded} />
      </div>
    );
  }
}

export default App;
