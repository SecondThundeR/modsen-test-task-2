import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Route, Waypoint } from "@/schemas/geoapify";

export interface RouteState {
  data: Route | null;
  endWaypoint: Waypoint;
}

const initialState: RouteState = {
  data: null,
  endWaypoint: { lat: 0, lon: 0 },
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteState["data"]>) => {
      state.data = action.payload;
      if (!action.payload?.properties) return;

      const { waypoints } = action.payload.properties;
      state.endWaypoint = waypoints[waypoints.length - 1];
    },
    resetRoute: (state) => {
      state.data = null;
      state.endWaypoint = { lat: 0, lon: 0 };
    },
  },
});

export const { setRoute, resetRoute } = routeSlice.actions;

export default routeSlice.reducer;
