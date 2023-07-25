import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Route } from "@/schemas/geoapify";

export interface RouteState {
  data: Route | null;
}

const initialState: RouteState = {
  data: null,
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<RouteState["data"]>) => {
      state.data = action.payload;
    },
    resetRoute: (state) => {
      state.data = null;
    },
  },
});

export const { setRoute, resetRoute } = routeSlice.actions;

export default routeSlice.reducer;
