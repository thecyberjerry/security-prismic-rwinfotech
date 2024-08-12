import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleOn: (state) => {
      state.value = true;
    },
    toggleOff: (state) => {
      state.value = false;
    },
  },
});
export const { toggleOn, toggleOff } = counterSlice.actions;

export default counterSlice.reducer;
