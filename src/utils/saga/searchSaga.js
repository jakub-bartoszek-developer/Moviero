import { call, put, debounce } from "@redux-saga/core/effects";
import {
 fetchSearchResults,
 setSearchResults,
 setSearchStatus,

} from "../redux/searchSlice";
import { fetchAPI } from "../fetchAPI";

function* fetchSearchResultsHandler({ payload }) {
 try {
  yield put(setSearchStatus("loading"));
  const searchResults = yield call(
   fetchAPI,
   `search/${payload.category}?query=${payload.searchQuery}&page=${payload.page}`
  );
  yield put(setSearchResults(searchResults.results));
  yield put(setSearchStatus("success"));
 } catch (error) {
  yield put(setSearchStatus("error"));
 }
}

export function* searchSaga() {
 yield debounce(300, fetchSearchResults.type, fetchSearchResultsHandler);
}
