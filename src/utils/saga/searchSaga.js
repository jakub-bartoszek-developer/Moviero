import {
 takeLatest,
 call,
 put,
 delay,
 debounce
} from "@redux-saga/core/effects";
import {
 fetchSearchbarResults,
 fetchSearchResults,
 setSearchbarResults,
 setSearchbarStatus,
 setSearchResults,
 setSearchStatus,
 setTotalPages,
 setTotalResults
} from "../redux/searchSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchSearchbarResultsHandler({ payload }) {
 try {
  yield put(setSearchbarStatus("loading"));
  const searchbarResults = yield call(
   fetchAPI,
   `search/${payload.category}?query=${payload.searchQuery}&page=${payload.page}`
  );
  yield put(setSearchbarResults(searchbarResults.results));
  yield put(setSearchbarStatus("success"));
 } catch (error) {
  yield put(setSearchbarStatus("error"));
 }
}

function* fetchSearchResultsHandler({ payload }) {
 try {
  yield put(setSearchStatus("loading"));
  const searchResults = yield call(
   fetchAPI,
   `search/${payload.category}?query=${payload.searchQuery}&page=${payload.page}`
  );
  yield put(setSearchResults(searchResults.results));
  yield put(setTotalPages(searchResults.total_pages));
  yield put(setTotalResults(searchResults.total_results));
  yield delay(300);
  yield put(setSearchStatus("success"));
 } catch (error) {
  yield put(setSearchStatus("error"));
 }
}

export function* searchSaga() {
 yield debounce(300, fetchSearchbarResults.type, fetchSearchbarResultsHandler);
 yield takeLatest(fetchSearchResults.type, fetchSearchResultsHandler);
}
