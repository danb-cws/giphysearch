import "normalize.css";
import "./variables.css";
import "./App.css";
import React, { Component } from "react";
import Search from "./components/Search/";
import Spinner from "./components/Spinner/";
import Player from "./components/Player/";
import ResultList from "./components/ResultList/";
import * as config from "./config";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: config.default_term,
  //     gifs: [],
  //     selectedItem: 0,
  //     resultsPageIndex: 0,
  //     totalResults: 0,
  //     dataIsLoaded: false,
  //     imageIsLoaded: false
  //   };
  // }

  state = {
    searchTerm: config.default_term,
    gifs: [],
    selectedItem: 0,
    resultsPageIndex: 0,
    totalResults: 0,
    dataIsLoaded: false,
    imageIsLoaded: false
  };

  componentDidMount() {
    this.giphySearchHandler(this.state.searchTerm);
  }

  giphySearchHandler(term) {
    this.setState({
      searchTerm: term,
      dataIsLoaded: false,
      imageIsLoaded: false
    });
    return fetch(
      `${config.GIPHY_ENDPOINT}${encodeURI(this.state.searchTerm)}&api_key=${
        config.GIPHY_API_KEY
      }&limit=${config.RESULTS_PER_PAGE}&offset=${this.state.resultsPageIndex *
        config.RESULTS_PER_PAGE}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then(json => {
        this.setState({
          totalResults: json.pagination.total_count
        });
        return json.data;
      })
      .then(gifs =>
        this.setState({
          gifs,
          selectedItem: 0,
          dataIsLoaded: true
        })
      )
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--title">Giphysearch</h1>
          <p>
            A work in progress...{" "}
            <a href="https://github.com/danb-cws/giphysearch">Github</a>
          </p>
        </header>
        <Search
          onSearchTermChange={searchTerm => {
            this.setState({ searchTerm: searchTerm, resultsPageIndex: 0 });
            this.giphySearchHandler(searchTerm);
          }}
        />
        <ResultList
          gifs={this.state.gifs}
          selectedItem={this.state.selectedItem}
          totalResults={this.state.totalResults}
          resultsPageIndex={this.state.resultsPageIndex}
          onItemSelect={index => {
            if (index !== this.state.selectedItem) {
              this.setState({ selectedItem: index, imageIsLoaded: false });
            }
          }}
          onPaginate={dir => {
            let nextPage = this.state.resultsPageIndex + dir;
            console.log('"""""""next page to load: ', nextPage);
            this.setState({ resultsPageIndex: nextPage }, () => {
              this.giphySearchHandler(this.state.searchTerm);
            });

            console.log(this.state.searchTerm);
          }}
        />
        <Spinner imageIsLoaded={this.state.imageIsLoaded} />
        <Player
          gifs={this.state.gifs}
          selectedItem={this.state.selectedItem}
          dataIsLoaded={this.state.dataIsLoaded}
          onImageLoaded={() => {
            this.setState({ imageIsLoaded: true });
          }}
        />
      </div>
    );
  }
}

export default App;
