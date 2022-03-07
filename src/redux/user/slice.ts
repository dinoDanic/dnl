import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "types";

const initialState: UserType = {
  email: null,
  organizationId: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      console.log(state, action);
      state.email = action.payload.email;
      state.organizationId = action.payload.organizationId;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
