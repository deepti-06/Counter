import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import hiderSlice from "./privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: hiderSlice.reducer
  },
});

export default counterStore;
