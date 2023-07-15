import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User } from "firebase/auth";

export interface UserState {
  userData: User | null;
}

const initialState: UserState = {
  userData: null,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    resetUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, resetUser } = counterSlice.actions;

export default counterSlice.reducer;
