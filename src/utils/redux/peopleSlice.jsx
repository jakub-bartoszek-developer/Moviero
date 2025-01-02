import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
 name: "people",
 initialState: {
  status: "",
  people: [],
  totalPages: 1,
  totalResults: 20
 },
 reducers: {
  fetchPopularPeople: () => {},
  fetchSearchedPeople: () => {},
  setStatus: (state, { payload }) => {
   state.status = payload;
  },
  setPeople: (state, { payload }) => {
   state.popularPeople = payload;
  },
  setTotalResults: (state, { payload }) => {
   state.totalResults = payload;
   console.log(state.totalResults)

  },
  setTotalPages: (state, { payload }) => {
   if (payload > 500) {
    state.totalPages = 500;
   } else {
    state.totalPages = payload;
   }
  }
 }
});

export const {
 fetchPopularPeople,
 fetchSearchedPeople,
 setPeople,
 setTotalPages,
 setStatus,
 setTotalResults
} = peopleSlice.actions;

export const selectPeople = (state) => state.people.popularPeople;
export const selectTotalPages = (state) => state.people.totalPages;
export const selectStatus = (state) => state.people.status;
export const selectTotalResults = (state) => state.people.totalResults;

export default peopleSlice.reducer;
