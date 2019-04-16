import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  
  state = {

  }

  componentDidMount(){
     this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies : movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map(movie => {
      console.log(movie.id)
      return <Movie key={movie.id} title={movie.title} poster={movie.large_cover_image}/>;
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
