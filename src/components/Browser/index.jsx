import React, { Component } from "react";
import * as config from "../../config";
import Search from "../Search";
import ResultList from "../ResultList";
import ErrorScreen from "../ErrorScreen";

class Browser extends Component {
  state = {
    searchTerm: "",
    gifs: [],
    selectedItemIndex: 0,
    resultsPageIndex: 0,
    totalResults: 0,
    hasPaginated: false,
    jsonIsLoaded: false
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
                ? this.setState({
                    currentId: 0
                  }) // shows 'no results' page
                : resultsPageIndex === 0 && !hasPaginated
                  ? this.props.onSetImageId(gifs[0].id) // select the first one if a new search
                  : null
            )
          )
          .catch(error => console.error("Fetch error: " + error));
      }
    );
  };

  render() {
    const {
      selectedItemIndex,
      totalResults,
      resultsPageIndex,
      gifs,
      searchTerm,
      jsonIsLoaded
    } = this.state;
    return (
      <React.Fragment>
        <Search
          onSearchTermChange={searchTerm => {
            this.setState(
              {
                searchTerm,
                resultsPageIndex: 0,
                selectedItemIndex: 0,
                hasPaginated: false
              },
              () => {
                this.giphySearchHandler();
              }
            );
          }}
        />
        <ResultList
          gifs={gifs}
          selectedItemIndex={selectedItemIndex}
          totalResults={totalResults}
          resultsPageIndex={resultsPageIndex}
          onItemSelect={(index, giphyId) => {
            this.setState(
              {
                selectedItemIndex: index,
                currentId: giphyId
              },
              () => {
                this.props.onSetImageId(giphyId);
              }
            );
          }}
          onPaginate={dir => {
            this.setState(
              {
                resultsPageIndex: resultsPageIndex + dir,
                hasPaginated: true
              },
              () => {
                this.giphySearchHandler();
              }
            );
          }}
        />
        <ErrorScreen
          gifs={gifs}
          searchTerm={searchTerm}
          jsonIsLoaded={jsonIsLoaded}
        />
      </React.Fragment>
    );
  }
}

export default Browser;
