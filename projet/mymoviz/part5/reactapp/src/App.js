import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [moviesWishList, setMoviesWishList] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      var rawResponse = await fetch("/new-movies");
      var response = await rawResponse.json();
      setMovieList(response);

      var rawResponse2 = await fetch("/wishlist-movie");
      var response2 = await rawResponse2.json();
      var wishListFromDB = response2.allMovies.map((movie) => {
        return { name: movie.name, img: movie.img };
      });
      setMoviesWishList(wishListFromDB);
      setMoviesCount(response2.allMovies.length);
    }
    loadMovie();
  }, []);

  var handleClickAddMovie = async (movieName, image) => {
    await fetch("/wishlist-movie", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${movieName}&img=${image}`,
    });
    setMoviesCount(moviesCount + 1);
    setMoviesWishList([...moviesWishList, { name: movieName, img: image }]);
  };

  var handleClickRemoveMovie = async (movieName) => {
    await fetch(`/wishlist-movie/${movieName}`, {
      method: "DELETE",
    });
    setMoviesCount(moviesCount - 1);
    setMoviesWishList(moviesWishList.filter((e) => e.name !== movieName));
  };

  var moviesList = [];
  for (var i = 0; i < 20; i++) {
    moviesList.push(
      <Movie
        movieName={movieList.response?.results[i].original_title}
        movieDesc={movieList.response?.results[i].overview}
        movieImg={
          "https://image.tmdb.org/t/p/w500" +
          movieList.response?.results[i].backdrop_path
        }
        globalRating={movieList.response?.results[i].vote_average}
        globalCountRating={movieList.response?.results[i].vote_count}
        handleClickAddMovieParent={handleClickAddMovie}
        handleClickRemoveMovieParent={handleClickRemoveMovie}
        likeMovie={moviesWishList.find(movie => movie.name === movieList.response?.results[i].original_title ) ? true : false}
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
