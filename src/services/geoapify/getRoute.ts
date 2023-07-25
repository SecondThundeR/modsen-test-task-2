import { ROUTING_ENDPOINT } from "@/constants/geoapify/links";

import { Route, RouteSchema } from "@/schemas/geoapify";

import { fetcher } from "@/services/geoapify/fetcher";

import { parseResponse } from "@/utils/zod/parseResponse";

type Waypoints = Route["properties"]["waypoints"];

const buildParams = (waypoints: Waypoints) => {
  return {
    waypoints: waypoints
      .map((waypoint) => `${waypoint.lat},${waypoint.lon}`)
      .join("|"),
    mode: "walk",
    lang: "ru",
    apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
  };
};

export const getRoute = async (waypoints: Waypoints) => {
  const params = buildParams(waypoints);
  const res = await fetcher.get(ROUTING_ENDPOINT, { params });
  return await parseResponse(res.data, RouteSchema);
};
