import axios from "axios";

import { SEARCH_ENDPOINT } from "@/constants/foursquare/links";

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
  return results[0].fsq_id;
};
