import { takeLatest, call, put } from "@redux-saga/core/effects";
import {
 fetchMovie,
 setMovie,
 setMovieCredits,
 setStatus
} from "../redux/movieSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchMovieHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const movie = yield call(fetchAPI, `movie/${payload.movieId}?language=en-US`);
  const movieCredits = yield call(
   fetchAPI,
   `movie/${payload.movieId}/credits?language=en-US`
  );
  yield put(setMovie(movie));
  yield put(setMovieCredits(movieCredits));
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* movieSaga() {
 yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
