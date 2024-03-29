import React from "react";
import { useSelector } from "react-redux";
import { getAllMovie, getAllShows } from "../../features/Movies/MovieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { Settings } from "../../utils/settings";

const MovieListing = () => {
  const movieData = useSelector(getAllMovie);
  const showsData = useSelector(getAllShows);
  
  let renderMovies = "";
  let renderShows = "";

  renderMovies =
    movieData.Response === "True" &&
    movieData.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));

  renderShows =
    showsData.Response === "True" &&
    showsData.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ));

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movieData.Response === "True" ? (
            <Slider {...Settings}>{renderMovies} </Slider>
          ) : (
            <div className="movies-error">
              <h3>{movieData.Error}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">
          {showsData.Response === "True" ? (
            <Slider {...Settings}>{renderShows}</Slider>
          ) : (
            <div className="movies-error">
              <h3>{showsData.Error}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
