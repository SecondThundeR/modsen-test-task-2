import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Places } from "@/schemas/geoapify";

export interface PlacesState {
  places: Places;
  searchPlaces: Places | null;
}

const initialState: PlacesState = {
  places: [],
  searchPlaces: null,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<PlacesState["places"]>) => {
      state.places = action.payload;
    },
    setSearchPlaces: (
      state,
      action: PayloadAction<PlacesState["searchPlaces"]>,
    ) => {
      state.searchPlaces = action.payload;
    },
    resetSearchPlaces: (state) => {
      state.searchPlaces = null;
    },
  },
});

export const { setPlaces, setSearchPlaces, resetSearchPlaces } =
  placesSlice.actions;

export default placesSlice.reducer;
