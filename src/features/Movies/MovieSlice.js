import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from '../../utils/apis/MoviesAPI';
import {APIKEY} from "../../utils/apis/MovieApikeys";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovie', async(term)=>{
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${term}&type=movie`);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
      const response = await movieApi.get(
        `?apiKey=${APIKEY}&s=${term}&type=series`
      );
      return response.data;
    }
  );

  export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
    "movies/fetchAsyncMoviesOrShowsDetails",
    async (id) => {
      const response = await movieApi.get(
        `?apiKey=${APIKEY}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState = {
    movie : {},
    shows: {},
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers :{
         removeSelectedMovieOrShow: (state)=>{
          state.selectMovieOrShow ={}
        }
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
             return {...state,movie:action.payload}
      })
        builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
             return {...state,shows:action.payload}
          })
          builder.addCase(fetchAsyncMoviesOrShowsDetails.fulfilled, (state, action) => {
            return {...state,selectMovieOrShow:action.payload}
          })
    }
   
})

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movie;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetails = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;