import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
 fetchPopularMovies,
 fetchSimilarMovies,
 setGenres,
 setPopularMovies,
 setSimilarMovies,
 setStatus,
 setTotalPages
} from "../redux/moviesSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchPopularMoviesHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const popularMovies = yield call(
   fetchAPI,
   `movie/popular?page=${payload.page}`
  );
  const genres = yield call(fetchAPI, `genre/movie/list?language=en`);
  yield put(setPopularMovies(popularMovies.results));
  yield put(setTotalPages(popularMovies.total_pages));
  yield put(setGenres(genres.genres));
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
 yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
 yield takeLatest(fetchSimilarMovies.type, fetchSimilarMoviesHandler);
}
