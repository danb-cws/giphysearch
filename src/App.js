import React, { Component } from 'react';
import Search from './components/search';
import Player from './components/player';
import ResultList from './components/result_list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphysearch, a React Demo by Dan B</h1>
        </header>
        <Search/>
        <Player/>
        <ResultList/>

      </div>
    );
  }
}

export default App;
