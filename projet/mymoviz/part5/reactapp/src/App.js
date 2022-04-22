import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";

function App() {
  let [movieList, setMovieList] = useState([]);
  useEffect(() => {
    async function loadMovie() {
      var rawResponse = await fetch("/new-movies");
      var response = await rawResponse.json();
      setMovieList(response);
    }
    loadMovie();
  }, []);

  const [moviesCount, setMoviesCount] = useState(0);
  const [moviesWishList, setMoviesWishList] = useState([]);

  var handleClickAddMovie = (movieName, image) => {
    setMoviesCount(moviesCount + 1);
    setMoviesWishList([...moviesWishList, { name: movieName, img: image }]);
  };

  var handleClickRemoveMovie = (movieName) => {
    setMoviesCount(moviesCount - 1);
    setMoviesWishList(moviesWishList.filter((e) => e.name !== movieName));
  };

    var moviesList = [];
    for (var i = 0; i < 20; i++) {
      console.log(movieList);
      moviesList.push(
        <Movie
          movieName={movieList.response?.results[i].original_title}
          movieDesc={movieList.response?.results[i].overview}
          movieImg={"https://image.tmdb.org/t/p/w500" + movieList.response?.results[i].backdrop_path}
          globalRating={movieList.response?.results[i].vote_average}
          globalCountRating={movieList.response?.results[i].vote_count}
          handleClickAddMovieParent={handleClickAddMovie}
          handleClickRemoveMovieParent={handleClickRemoveMovie}
        />
      );
    }

  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            <div>
              <Navbar countfilms={moviesCount} wishfilms={moviesWishList} />
            </div>
            {moviesList}
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
