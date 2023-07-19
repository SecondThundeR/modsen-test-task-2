import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "@/features/location/locationSlice";
import placesReducer from "@/features/places/placesSlice";
import userReducer from "@/features/user/userSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    places: placesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
