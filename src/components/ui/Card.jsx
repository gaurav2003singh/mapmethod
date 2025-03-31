import React from "react";


export const Card = ({movie}) => {
  if (!movie) {
    return <p>Loading...</p>; // Or any fallback UI
  }

  const { name, poster, release_year, rating, genre, actors } = movie;
  return (
    <div className="movieCard">
      <div className="poster">
        <img src={poster} alt={movie.name} />
        </div>
        <div className="list">
          <li>Name: {name}</li>
          <li>year: {release_year}</li>
          <li>Rating {rating}</li>
          <li>Genre: {genre.join(",")}</li>
          <li>actors: {actors.join(",")}</li>
        </div>
      
    </div>
  );
};
