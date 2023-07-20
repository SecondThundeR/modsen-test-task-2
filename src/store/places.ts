import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { PlacesProperties } from "@/schemas/geoapify";

export interface PlacesState {
  features: PlacesProperties;
}

const initialState: PlacesState = {
  features: [],
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<PlacesState["features"]>) => {
      state.features = action.payload;
    },
  },
});

export const { setPlaces } = placesSlice.actions;

export default placesSlice.reducer;
