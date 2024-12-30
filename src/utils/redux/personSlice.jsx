import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
 name: "person",
 initialState: {
  person: {},
  personCredits: {},
  personMovies: [],
  status: "loading"
 },
 reducers: {
  fetchPerson: () => {},
  setPerson: (state, { payload }) => {
   state.person = payload;
  },
  setPersonCredits: (state, { payload }) => {
   state.personCredits = payload;
  },
  setPersonMovies: (state, { payload }) => {
   state.personMovies = payload;
  },
  setStatus: (state, { payload }) => {
   state.status = payload;
  }
 }
});

export const {
 fetchPerson,
 setPerson,
 setStatus,
 setPersonCredits,
 setPersonMovies
} = personSlice.actions;

export const selectPerson = (state) => state.person.person;
export const selectPersonCredits = (state) => state.person.personCredits;
export const selectPersonMovies = (state) => state.person.personMovies;
export const selectStatus = (state) => state.person.status;

export default personSlice.reducer;
