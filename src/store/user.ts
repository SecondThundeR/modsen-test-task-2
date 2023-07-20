import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User } from "firebase/auth";

export interface UserState {
  userData: Pick<User, "uid" | "email" | "displayName"> | null;
}

const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<NonNullable<UserState["userData"]>>,
    ) => {
      state.userData = action.payload;
    },
    resetUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
