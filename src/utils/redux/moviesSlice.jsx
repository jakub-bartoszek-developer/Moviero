import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
 name: "movies",
 initialState: {
  status: "",
  movies: [],
  randomPopularMovie: {},
  similarMovies: [],
  genres: [],
  totalPages: 1,
  totalResults: 20
 },
 reducers: {
  fetchPopularMovies: () => {},
  fetchSearchedMovies: () => {},
  fetchSimilarMovies: () => {},
  setStatus: (state, { payload }) => {
   state.status = payload;
  },

  setMovies: (state, { payload }) => {
   state.movies = payload;
  },
  setRandomPopularMovie: (state, { payload }) => {
   state.randomPopularMovie = payload;
  },
  setSimilarMovies: (state, { payload }) => {
   state.similarMovies = payload;
  },
  setGenres: (state, { payload }) => {
   state.genres = payload;
  },
  setTotalResults: (state, { payload }) => {
   state.totalResults = payload;
  },
  setTotalPages: (state, { payload }) => {
   if (payload > 500) {
    state.totalPages = 500;
   } else {
    state.totalPages = payload;
   }
  }
 }
});

export const {
 fetchPopularMovies,
 fetchSearchedMovies,
 setRandomPopularMovie,
 fetchSimilarMovies,
 setMovies,
 setSimilarMovies,
 setGenres,
 setTotalPages,
 setStatus,
 setTotalResults
} = moviesSlice.actions;

export const selectMovies = (state) => state.movies.movies;
export const selectRandomPopularMovie = (state) =>
 state.movies.randomPopularMovie;
export const selectSimilarMovies = (state) => state.movies.similarMovies;
export const selectGenres = (state) => state.movies.genres;
export const selectTotalPages = (state) => state.movies.totalPages;
export const selectStatus = (state) => state.movies.status;
export const selectTotalResults = (state) => state.movies.totalResults;

export default moviesSlice.reducer;
