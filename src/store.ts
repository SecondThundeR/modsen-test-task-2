import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "@/features/location/locationSlice";
import userReducer from "@/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
