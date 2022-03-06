import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types";

const initialState: IUser = {
  name: null,
  email: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
