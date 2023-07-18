import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const FALLBACK_LATITUDE = 51.505;
const FALLBACK_LONGITUDE = -0.09;

export interface LocationState {
  location: {
    lat: number;
    lon: number;
  };
}

const initialState: LocationState = {
  location: {
    lat: FALLBACK_LATITUDE,
    lon: FALLBACK_LONGITUDE,
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState["location"]>) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
