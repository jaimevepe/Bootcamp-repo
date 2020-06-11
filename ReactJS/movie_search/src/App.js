import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    // const movies = [
    //   {id: 0, poster_src: "https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", 
    //    title: "Avengers: Infinity War", 
    //   overview: "The Avengers fight Thanos."},

    //    {id: 1, poster_src: "https://image.tmdb.org/t/p/w185/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", 
    //     title: "The Avengers", 
    //     overview: "The Avengers fight Loki."}
    // ]

    // var movieRows = [];
    // movies.forEach((movie) => {
    //   const movieRow = <div key={movie.id}>
    //                       <img alt="poster"
    //                       src={movie.poster_src} />
    //                       {movie.title}
    //                     </div>
    //     movieRows.push(movieRow)
    // })

    this.state = {
      rows: []
    }

  }

  performSearch(searchTerm) {
    const url =`https://api.themoviedb.org/3/search/movie?api_key=da387bef20fb7cc25d1f59550606e2c4&query=${searchTerm}`
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(searchResults => {
      let movies = searchResults.results; // from API JSON
      var movieRows = [];
      movies.forEach((movie) => { 
        const movieRow = <div key={movie.id} className="container">
                            <img alt="poster"
                            src={"https://image.tmdb.org/t/p/w185" + movie.poster_path} /> 
                            <h3>{movie.title}</h3>
                            <p> <strong>Release Date:</strong> {movie.release_date} </p>
                            <p>{movie.overview}</p>
                          </div>
          movieRows.push(movieRow)
      })
      this.setState ({rows: movieRows}) //setState is to update the state
      })
    .catch(error => {
      console.error(`Error from API: ${error}`)
    })
  }

  searchChangeHandler = (event) => {
    this.performSearch(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Search!</h1>

        <input 
        id="inputField"
        onChange={this.searchChangeHandler}
        type="text"
        placeholder="Enter your movie" 
        />
        {this.state.rows}
      </div>
    )
  }
}

export default App;
