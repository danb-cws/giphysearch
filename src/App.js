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
  state = {
    searchTerm: config.default_term,
    gifs: [],
    selectedGifData: {},
    selectedItem: 0,
    resultsPageIndex: 0,
    totalResults: 0,
    currentId: 0,
    dataIsLoaded: false,
    imageIsLoaded: false
  };

  componentDidMount() {
    this.giphySearchHandler(this.state.searchTerm);
  }

  setImageId(id) {
    if (id === 0) {
      this.setState({
        currentId: id
      });
    } else {
      this.setState({
        currentId: id,
        imageIsLoaded: false
      });
      this.fetchPlayerImage(id);
    }
  }

  giphySearchHandler(term) {
    this.setState({
      searchTerm: term,
      dataIsLoaded: false,
      imageIsLoaded: false
    }, () => {
      this.fetchData().catch(e => {console.log('error: ',e);});
    }

    )}

  fetchData = () => {

    console.log('hello!');
    return fetch(
      `${config.GIPHY_ENDPOINT}search?q=${encodeURI(
        this.state.searchTerm
      )}&api_key=${config.GIPHY_API_KEY}&limit=${
        config.RESULTS_PER_PAGE
      }&offset=${this.state.resultsPageIndex * config.RESULTS_PER_PAGE}&rating=Y`
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
        this.setState(
          {
            gifs,
            dataIsLoaded: true
          },
          gifs.length ? this.setImageId(gifs[this.state.selectedItem].id) : this.setImageId(0)
        )
      )
      .catch(error => console.error(error));
  }

  fetchPlayerImage(id) {
    return fetch(
      `${config.GIPHY_ENDPOINT}${id}?&api_key=${config.GIPHY_API_KEY}`
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
          selectedGifData: json.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--title">Giphysearch</h1>
          <p>
            A work in progress...
            <a href="https://github.com/danb-cws/giphysearch">Github</a>
          </p>
        </header>
        <Search
          onSearchTermChange={searchTerm => {
            this.setState({ searchTerm: searchTerm, resultsPageIndex: 0, selectedItem: 0 });
            this.giphySearchHandler(searchTerm);
          }}
        />
        <ResultList
          gifs={this.state.gifs}
          selectedItem={this.state.selectedItem}
          totalResults={this.state.totalResults}
          resultsPageIndex={this.state.resultsPageIndex}
          onItemSelect={(index, giphyId) => {
            this.setState(
              {
                selectedItem: index,
                imageIsLoaded: false
              },
              this.setImageId(giphyId)
            );
          }}
          onPaginate={dir => {
            let nextPage = this.state.resultsPageIndex + dir;
            this.setState({ resultsPageIndex: nextPage }, () => {
              console.log('TERM: ',this.state.searchTerm);
              this.giphySearchHandler(this.state.searchTerm);
            });
          }}
        />
        <Spinner showSpinner={!this.state.imageIsLoaded} />
        <Player
          gifs={this.state.gifs}
          selectedGifData={this.state.selectedGifData}
          currentId={this.state.currentId}
          selectedItem={this.state.selectedItem}
          searchTerm={this.state.searchTerm}
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
