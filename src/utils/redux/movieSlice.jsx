import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
 name: "movie",
 initialState: {
  movie: {},
  movieCredits: {},
  status: "loading"
 },
 reducers: {
  fetchMovie: () => {},
  setMovie: (state, { payload }) => {
   state.movie = payload;
  },
  setMovieCredits: (state, { payload }) => {
   state.movieCredits = payload;
  },
  setStatus: (state, { payload }) => {
   state.status = payload;
  }
 }
});

export const {
 fetchMovie,
 setMovie,
 setStatus,
 setMovieCredits
} = movieSlice.actions;

export const selectMovie = (state) => state.movie.movie;
export const selectMovieCredits = (state) => state.movie.movieCredits;
export const selectStatus = (state) => state.movie.status;

export default movieSlice.reducer;
