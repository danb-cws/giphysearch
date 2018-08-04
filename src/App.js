import "normalize.css";
import "./variables.css";
import "./base.css";
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header/";
import Search from "./components/Search/";
import Spinner from "./components/Spinner/";
import Player from "./components/Player/";
import ResultList from "./components/ResultList/";
import * as config from "./config";

class App extends Component {
  state = {
    searchTerm: "",
    gifs: [],
    selectedGifData: {},
    selectedItem: 0,
    resultsPageIndex: 0,
    totalResults: 0,
    currentId: 0,
    hasPaginated: false,
    jsonIsLoaded: false,
    imageIsLoaded: false
  };

  giphySearchHandler = () => {
    this.setState(
      {
        jsonIsLoaded: false
      },
      () => {
        return fetch(
          `${config.GIPHY_ENDPOINT}search?q=${encodeURI(
            this.state.searchTerm
          )}&api_key=${config.GIPHY_API_KEY}&limit=${
            config.RESULTS_PER_PAGE
          }&offset=${this.state.resultsPageIndex *
            config.RESULTS_PER_PAGE}&rating=pg-13`
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
                jsonIsLoaded: true
              },
              !gifs.length
                ? this.setImageId(0) // shows 'no results' page
                : this.state.resultsPageIndex === 0 && !this.state.hasPaginated
                  ? this.setImageId(gifs[0].id) // select the first one if a new search
                  : null
            )
          )
          .catch(error => console.error(error));
      }
    );
  };

  setImageId = id => {
    if (id === 0) {
      this.setState({
        currentId: 0
      });
    } else {
      this.setState({
        currentId: id,
        imageIsLoaded: false
      });
      this.fetchPlayerImage(id);
    }
  };

  fetchPlayerImage = id => {
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
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          onSearchTermChange={searchTerm => {
            this.setState(
              {
                searchTerm: searchTerm,
                resultsPageIndex: 0,
                selectedItem: 0,
                selectedGifData: {},
                hasPaginated: false
              },
              () => {
                this.giphySearchHandler();
              }
            );
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
                selectedItem: index
              },
              () => {
                this.setImageId(giphyId);
              }
            );
          }}
          onPaginate={dir => {
            this.setState(
              {
                resultsPageIndex: this.state.resultsPageIndex + dir,
                hasPaginated: true
              },
              () => {
                this.giphySearchHandler();
              }
            );
          }}
        />
        <Spinner showSpinner={!this.state.imageIsLoaded} />
        <Player
          gifs={this.state.gifs}
          selectedGifData={this.state.selectedGifData}
          searchTerm={this.state.searchTerm}
          jsonIsLoaded={this.state.jsonIsLoaded}
          onImageLoaded={() => {
            this.setState({ imageIsLoaded: true });
          }}
        />
      </div>
    );
  }
}

export default App;
