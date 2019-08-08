import React from 'react';
import ReactDOM from 'react-dom';
import './scss/reset.scss';
import './scss/base.scss';
import PokemonSearch from '../src/components/PokemonSearch';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PokemonSearch />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
