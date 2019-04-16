import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';


const movies = [
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
  }
]



class App extends Component {
  
  state = {
    greeting : 'Hello!'
  }

  componentWillMount(){
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        greeting : 'hello again'
      })
    }, 5000
    )
  }

  render() {
    console.log('render');
    console.log(this.state.greeting);
    return (
      <div className="App">
      {movies.map((movie, index) => {
        return <Movie key={index} title={movie.title} poster={movie.poster}/>;
      })}
      </div>
    );
  }
}

export default App;
