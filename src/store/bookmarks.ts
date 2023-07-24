import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PlacesProperties } from "@/schemas/geoapify";

export interface Bookmark {
  [placeId: string]: Omit<PlacesProperties, "place_id">;
}

export interface BookmarksState {
  bookmarks: Bookmark[];
}

const initialState: BookmarksState = {
  bookmarks: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    setBookmarks: (
      state,
      action: PayloadAction<BookmarksState["bookmarks"]>,
    ) => {
      state.bookmarks = action.payload;
    },
    appendBookmark: (state, action: PayloadAction<Bookmark>) => {
      const bookmarkIndex = state.bookmarks.findIndex(
        (bookmark) =>
          Object.keys(bookmark)[0] === Object.keys(action.payload)[0],
      );
      if (bookmarkIndex === -1) state.bookmarks.push(action.payload);
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      const bookmarkIndex = state.bookmarks.findIndex(
        (bookmark) => Object.keys(bookmark)[0] === action.payload,
      );
      if (bookmarkIndex !== -1) state.bookmarks.splice(bookmarkIndex, 1);
    },
  },
});

export const { setBookmarks, appendBookmark, removeBookmark } =
  bookmarksSlice.actions;

export default bookmarksSlice.reducer;
