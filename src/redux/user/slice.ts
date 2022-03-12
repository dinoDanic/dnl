import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "types";

const initialState: UserType = {
  email: "",
  organizationId: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.email = action.payload.email;
      state.organizationId = action.payload.organizationId;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
