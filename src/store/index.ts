import { configureStore } from "@reduxjs/toolkit";

import bookmarksReducer from "@/store/bookmarks";
import locationReducer from "@/store/location";
import placesReducer from "@/store/places";
import userReducer from "@/store/user";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
    location: locationReducer,
    places: placesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
