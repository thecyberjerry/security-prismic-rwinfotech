import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../toggle/state";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
