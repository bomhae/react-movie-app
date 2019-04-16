import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

const moviesTitles = [
  "matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={moviesTitles[0]} poster={movieImages[0]}/>
        <Movie title={moviesTitles[1]} poster={movieImages[1]}/>
        <Movie title={moviesTitles[2]} poster={movieImages[2]}/>
        <Movie title={moviesTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
