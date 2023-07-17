import axios from "axios";

import { PLACES_ENDPOINT } from "@/constants/geoapify/links";

import { PlacesSchema } from "@/schemas/geoapify";

export const getCurrentCityPlaces = async (placeID: string) => {
  const res = await axios.get(PLACES_ENDPOINT, {
    params: {
      categories: "accommodation",
      filter: `place:${placeID}`,
      limit: 20,
      offset: 0,
      apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
    },
  });
  const parsedRes = await PlacesSchema.parseAsync(res.data);
  return parsedRes.features;
};
