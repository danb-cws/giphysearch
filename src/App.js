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
    selectedItemIndex: 0,
    resultsPageIndex: 0,
    totalResults: 0,
    currentId: 0,
    hasPaginated: false,
    jsonIsLoaded: false,
    imageIsLoaded: false
  };

  giphySearchHandler = () => {
    const { searchTerm, resultsPageIndex, hasPaginated } = this.state;
    this.setState(
      {
        jsonIsLoaded: false
      },
      () => {
        return fetch(
          `${config.GIPHY_ENDPOINT}search?q=${encodeURI(searchTerm)}&api_key=${
            config.GIPHY_API_KEY
          }&limit=${config.RESULTS_PER_PAGE}&offset=${resultsPageIndex *
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
                : resultsPageIndex === 0 && !hasPaginated
                  ? this.setImageId(gifs[0].id) // select the first one if a new search
                  : null
            )
          )
          .catch(error => console.error("Fetch error: " + error));
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
                selectedItemIndex: 0,
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
          selectedItemIndex={this.state.selectedItemIndex}
          totalResults={this.state.totalResults}
          resultsPageIndex={this.state.resultsPageIndex}
          onItemSelect={(index, giphyId) => {
            this.setState(
              {
                selectedItemIndex: index
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
