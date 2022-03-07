import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "types";

const initialState: UserType = {
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(state, action);
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
