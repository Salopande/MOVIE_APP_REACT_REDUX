import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../utils/apis/MoviesAPI';
import {APIKEY} from "../../utils/apis/MovieApikeys";
import { useDispatch, useSelector } from 'react-redux';
import { addMovies } from '../../features/Movies/MovieSlice';

const Home = () => {
  
  const dispatch = useDispatch();
  const movieData = useSelector(store => store.movie);
  console.log(movieData);
  const movieText ="Harry";

  useEffect(()=>{
    const fetchMovie = async()=>{
      const response = await movieApi.get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`).catch((err)=>{
         console.log(err)
      })
      dispatch(addMovies(response.data))
    } 
    fetchMovie()
  })

  return (
    <>
    <div className='banner-img'></div>
     { <MovieListing/>}
     </>
  )
}

export default Home
