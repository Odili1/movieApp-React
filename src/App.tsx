import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = 'http://omdbapi.com?apikey=ba6496c7';

// const movie2 = {
//   "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
//   "Year": "2016",
//   "imdbID": "tt18689424",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
// }


function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([])

  const searchMovie = async(movie1?: string) => {
    const response = await fetch(`${API_URL}&s=${movie1}`);
    const data = await response.json();

    setMovies(data.Search)
       
  }

  useEffect(() => {
    searchMovie('batman')
  }, [])
  
  console.log('new', movies);
  
  return (
    <div className="app">
      <h1>Box Office</h1>

      <div className="search">
        <input
          placeholder="Search Movie"
          value={search}
          onChange={(e) => (setSearch(e.target.value))}
          onKeyDown={(e) => (e.code == 'Enter'? searchMovie(search) : null)}
          
        />

        <img
          src={''} 
          alt="search" 
          onClick={() => searchMovie(search)}
        />
      </div>

      {
        movies.length !== 0
        ? (<div className="container">
            {
              movies.map((movie) => (
              <MovieCard movie={movie} />
              ))
            } 
          </div>)
        : 
          (<div>
            <h2>Movies Not Found</h2>
          </div>)
      }
    </div>
  );
}

export default App;
