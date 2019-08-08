import React, { Component } from 'react';
import PokemonSearch from './components/PokemonSearch';
import './scss/reset.scss';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonSearch />
      </div>
    );
  }
}

export default App;
