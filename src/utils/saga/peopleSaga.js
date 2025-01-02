import { takeLatest, call, put, delay } from "@redux-saga/core/effects";
import {
 fetchPopularPeople,
 fetchSearchedPeople,
 setPeople,
 setStatus,
 setTotalPages,
 setTotalResults
} from "../redux/peopleSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchPopularPeopleHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const people = yield call(
   fetchAPI,
   `person/popular?page=${payload.page}`
  );
  yield put(setPeople(people.results));
  yield put(setTotalPages(people.total_pages));
  yield delay(500);
  yield put(setStatus("success"));
 } catch (error) {
  yield put(setStatus("error"));
 }
}

function* fetchSearchedPeopleHandler({ payload }) {
 try {
  yield put(setStatus("loading"));
  const people = yield call(
   fetchAPI,
   `search/${payload.category}?query=${payload.searchQuery}&page=${payload.page}`
  );
  yield put(setPeople(people.results));
  yield put(setTotalPages(people.total_pages));
  yield put(setTotalResults(people.total_results));
  yield put(setStatus("success"));

 } catch (error) {
  yield put(setStatus("error"));
 }
}

export function* peopleSaga() {
 yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
 yield takeLatest(fetchSearchedPeople.type, fetchSearchedPeopleHandler);
}
