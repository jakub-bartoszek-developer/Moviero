import { takeLatest, call, put } from "@redux-saga/core/effects";
import {
 fetchPerson,
 setPerson,
 setStatus,
 setPersonMovies
} from "../redux/personSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchMovieHandler({ payload }) {
 try {
  yield put(setStatus("loading"));

  const person = yield call(
   fetchAPI,
   `person/${payload.personId}?language=en-US`
  );

  const personCredits = yield call(
   fetchAPI,
   `person/${payload.personId}/credits?language=en-US`
  );

  const personMovies = [...personCredits.cast, ...personCredits.crew];

  yield put(setPerson(person));
  yield put(setPersonMovies(personMovies));
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* personSaga() {
 yield takeLatest(fetchPerson.type, fetchMovieHandler);
}
