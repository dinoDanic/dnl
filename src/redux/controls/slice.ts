import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ControlsState {
  value: number;
}

const initialState: ControlsState = {
  value: 0,
};

export const countrolsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = countrolsSlice.actions;

export default countrolsSlice.reducer;
