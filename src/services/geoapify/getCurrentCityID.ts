import axios from "axios";

import { GEOCODE_REVERSE_ENDPOINT } from "@/constants/geoapify/links";

import { GeocodeReverseSchema } from "@/schemas/geoapify";

export const getCurrentCityID = async (lat: number, lon: number) => {
  const res = await axios.get(GEOCODE_REVERSE_ENDPOINT, {
    params: {
      lat,
      lon,
      format: "json",
      apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
    },
  });
  const parsedRes = await GeocodeReverseSchema.parseAsync(res.data);
  return parsedRes.results[0].place_id;
};
