import React, { useState } from "react";
import { Card } from "./ui/Card";
import { movieList,bollyMovie } from "./data/movieList";

export const Body = () => {
  const [movieList2, setMovieList2] = useState(movieList,bollyMovie);
  

  const filterTopRated = () => {
    console.log("Filtering...");
    const topRatedMovies = movieList.filter((movie) => movie.rating >= 9);
    setMovieList2(topRatedMovies);
  };
  const moreMovies = () => {
    
    const topMovies = movieList.filter((movie) => movie.rating >= 8 && movie.rating<9 );
    setMovieList2(topMovies);
  };

  const allMovies = () => {
    
    setMovieList2(movieList);
  };

  const hindiMovie = () => {
    setMovieList2(bollyMovie);
  }
   

  return (
    <>
      <h1 className="heading">Top IMDB movies</h1>
      <div className="buttons">
      <button className="btn" onClick={allMovies}>
        All
      </button>
      <button className="btn" onClick={filterTopRated}>
        Top rated
      </button>
      <button className="btn" onClick={moreMovies}>
        rated 8 
      </button>
      <button className="btn" onClick={hindiMovie}>
        Indian Movies
      </button>
      </div>
      <div className="Body">
        {movieList2.map((movie) => (
          <div className="cards" key={movie.key} >
            <Card  movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
