import { takeLatest, call, put } from "@redux-saga/core/effects";
import {
 fetchPerson,
 setPerson,
 setPersonCredits,
 setStatus
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
  yield put(setPerson(person));
  yield put(setPersonCredits(personCredits));
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* personSaga() {
 yield takeLatest(fetchPerson.type, fetchMovieHandler);
}
