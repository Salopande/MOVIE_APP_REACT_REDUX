import React from "react";
import { useSelector } from "react-redux";
import { getAllMovie } from "../../features/Movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movieData = useSelector(getAllMovie);
  console.log(movieData);
  let renderMovies = "";

  renderMovies =
    movieData.Response === "True" ? (
      movieData.Search
      .map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movieData.Error}</h3>
      </div>
    );

  return(
    <div className="movie-wrapper">
       <div className="movie-list">
         <h2>Movies</h2>
         <div className="movie-container">{renderMovies}</div>
       </div>
    </div>
  ) 
};

export default MovieListing;
