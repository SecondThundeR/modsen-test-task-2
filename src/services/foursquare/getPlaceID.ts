import axios from "axios";

import { SEARCH_ENDPOINT } from "@/constants/foursquareEndpoints";

import { SearchSchema } from "@/schemas/foursquare";

import { parseResponse } from "@/utils/zod/parseResponse";

const buildParams = (lat: number, lon: number, query: string) => {
  return {
    ll: `${lat},${lon}`,
    query,
    limit: 5,
    sort: "distance",
  };
};

export const getPlaceID = async (lat: number, lon: number, query: string) => {
  const params = buildParams(lat, lon, query);
  const res = await axios.get(SEARCH_ENDPOINT, {
    params,
    headers: {
      Authorization: import.meta.env.VITE_FOURSQUARE_KEY,
    },
  });

  const { results } = await parseResponse(res.data, SearchSchema);
  if (!results) throw new Error("Can't extract Foursquare ID for this place!");

  return results[0].fsq_id;
};
