import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  
  state = {
  }

  componentWillMount(){
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "matrix",
            poster : "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
          },
          {
            title : "Full Metal Jacket",
            poster : "https://images-na.ssl-images-amazon.com/images/I/91sTE00%2Bm%2BL._SY606_.jpg",
          },
          {
            title : "Oldboy",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
          },
          {
            title : "Star Wars",
            poster : "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
          },
          {
            title : "TrainsPotting",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          }
        ]
      })
    },5000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
      return <Movie key={index} title={movie.title} poster={movie.poster}/>;
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }
}

export default App;
