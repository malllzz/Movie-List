import React from "react";

const Movie = ({ movie }) => {
  return (
    <div style={{ width: "20%" }} className="p-3">
      <div className="card">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div
          className="card-body rounded-bottom"
          style={{ backgroundColor: "#e95327" }}
        >
          <p className="card-text text-white text-center">{movie.Title}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
