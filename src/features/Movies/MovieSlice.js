import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    movie : {}
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers :{
        addMovies : (state, action)=>{
            state.movie = action.payload;
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovie = (state) => state.movies.movie;
export default movieSlice.reducer;