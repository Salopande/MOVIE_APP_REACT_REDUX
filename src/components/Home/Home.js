import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../utils/apis/MoviesAPI";
import { APIKEY } from "../../utils/apis/MovieApikeys";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getAllMovie,
} from "../../features/Movies/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      {<MovieListing />}
    </>
  );
};

export default Home;
