import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import movieReducer from "./movieSlice";
import peopleReducer from "./peopleSlice";
import personReducer from "./personSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
 reducer: {
  movies: moviesReducer,
  search: searchReducer,
  movie: movieReducer,
  people: peopleReducer,
  person: personReducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;
