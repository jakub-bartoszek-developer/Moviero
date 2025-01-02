import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
 name: "search",
 initialState: {
  searchStatus: "",
  searchResults: [],
  searchQuery: "",
  category: "movie"
 },
 reducers: {
  fetchSearchResults: () => {},
  setSearchQuery: (state, { payload }) => {
   state.searchQuery = payload;
  },
  setCategory: (state, { payload }) => {
   state.category = payload;
  },

  setSearchResults: (state, { payload }) => {
   state.searchResults = payload;
  },
  setSearchStatus: (state, { payload }) => {
   state.searchStatus = payload;
  }
 }
});

export const {
 setSearchQuery,
 fetchSearchResults,
 setCategory,
 setSearchResults,
 setSearchStatus
} = searchSlice.actions;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectSearchResults = (state) => state.search.searchResults;
export const selectSearchStatus = (state) => state.search.searchStatus;
export const selectCategory = (state) => state.search.category;

export default searchSlice.reducer;
