import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  DEFAULT_RADIUS_METERS,
  LONDON_LATITUDE,
  LONDON_LONGITUDE,
} from "@/constants/leaflet/defaultMapValues";

export interface LocationState {
  locationCoordinates: {
    lat: number;
    lng: number;
  };
  locationRadius: number;
}

const initialState: LocationState = {
  locationCoordinates: {
    lat: LONDON_LATITUDE,
    lng: LONDON_LONGITUDE,
  },
  locationRadius: DEFAULT_RADIUS_METERS,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state,
      action: PayloadAction<LocationState["locationCoordinates"]>,
    ) => {
      state.locationCoordinates = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
