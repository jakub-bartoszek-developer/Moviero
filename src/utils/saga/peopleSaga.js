import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
 fetchPopularPeople,
 setPopularPeople,
 setStatus,
 setTotalPages
} from "../redux/peopleSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchPopularPeopleHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const popularMovies = yield call(
   fetchAPI,
   `person/popular?page=${payload.page}`
  );
  yield put(setPopularPeople(popularMovies.results));
  yield put(setTotalPages(popularMovies.total_pages));
  yield delay(500);
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* peopleSaga() {
 yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
