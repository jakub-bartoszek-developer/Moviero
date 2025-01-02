import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
 fetchPopularMovies,
 fetchSearchedMovies,
 fetchSimilarMovies,
 setGenres,
 setMovies,
 setSimilarMovies,
 setStatus,
 setTotalPages,
 setTotalResults
} from "../redux/moviesSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchPopularMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const movies = yield call(
   fetchAPI,
   `movie/popular?page=${payload.page}`
  );
  const genres = yield call(fetchAPI, `genre/movie/list?language=en`);
  yield put(setMovies(movies.results));
  yield put(setTotalPages(movies.total_pages));
  yield put(setGenres(genres.genres));
  yield put(setStatus("success"));

 } catch (error) {
  yield put(setStatus("error"));
 }
}

function* fetchSearchedMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const movies = yield call(
   fetchAPI,
   `search/${payload.category}?query=${payload.searchQuery}&page=${payload.page}`
  );
  const genres = yield call(fetchAPI, `genre/movie/list?language=en`);
  yield put(setMovies(movies.results));
  yield put(setTotalPages(movies.total_pages));
  yield put(setTotalResults(movies.total_results));
  yield put(setGenres(genres.genres));
  yield put(setStatus("success"));

 } catch (error) {
  yield put(setStatus("error"));
 }
}

function* fetchSimilarMoviesHandler({ payload }) {
 try {
  const similarMovies = yield call(
   fetchAPI,
   `discover/movie?with_genres=${payload.genreIds}`
  );
  yield put(setSimilarMovies(similarMovies.results));
  yield delay(200);
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* moviesSaga() {
 yield takeLatest(fetchSearchedMovies.type, fetchSearchedMoviesHandler);
 yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
 yield takeLatest(fetchSimilarMovies.type, fetchSimilarMoviesHandler);
}
