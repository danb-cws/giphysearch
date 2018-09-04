import React, { Component } from "react";
import * as config from "config";
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
    jsonIsLoaded: true,
    isOnline: true
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
                ? this.props.onSetImageId(0)// shows 'no results' page*/
                : resultsPageIndex === 0 && !hasPaginated
                  ? this.props.onSetImageId(gifs[0].id) // select the first one if a new search
                  : null
            )
          )
          .catch(error => console.error("Fetch error: " + error));
      }
    );
  };

  handleConnectivity = e => {
    this.setState({ isOnline: e.type === "online" ? true : false });
  };

  componentDidMount() {
    this.setState({ isOnline: navigator.onLine ? true : false });
    window.addEventListener("online", this.handleConnectivity);
    window.addEventListener("offline", this.handleConnectivity);
  }

  render() {
    const {
      selectedItemIndex,
      totalResults,
      resultsPageIndex,
      gifs,
      searchTerm,
      jsonIsLoaded,
      isOnline
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
            if (!this.state.isOnline) {
              return;
            }
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
            if (!this.state.isOnline) {
              return;
            }
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
          isOnline={isOnline}
        />
      </React.Fragment>
    );
  }
}

export default Browser;
