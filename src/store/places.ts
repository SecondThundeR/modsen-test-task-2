import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PlacesProperties } from "@/schemas/geoapify";

export interface PlacesState {
  features: PlacesProperties;
  searchFeatures: PlacesProperties | null;
}

const initialState: PlacesState = {
  features: [],
  searchFeatures: null,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<PlacesState["features"]>) => {
      state.features = action.payload;
    },
    setSearchPlaces: (
      state,
      action: PayloadAction<PlacesState["searchFeatures"]>,
    ) => {
      state.searchFeatures = action.payload;
    },
    resetSearchPlaces: (state) => {
      state.searchFeatures = null;
    },
  },
});

export const { setPlaces, setSearchPlaces, resetSearchPlaces } =
  placesSlice.actions;

export default placesSlice.reducer;
