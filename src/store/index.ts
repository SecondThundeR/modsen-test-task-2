import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "@/store/location";
import placesReducer from "@/store/places";
import userReducer from "@/store/user";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    places: placesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
