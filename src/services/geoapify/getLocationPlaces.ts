import axios from "axios";

import { categoriesArray } from "@/constants/geoapify/categories";
import { PLACES_ENDPOINT } from "@/constants/geoapify/links";

import { PlacesSchema } from "@/schemas/geoapify";

export const getLocationPlaces = async (
  lat: number,
  lon: number,
  radius: number = 1000
) => {
  const res = await axios.get(PLACES_ENDPOINT, {
    params: {
      categories: categoriesArray.join(","),
      filter: `circle:${lon},${lat},${radius}`,
      limit: 70,
      offset: 0,
      lang: "ru",
      apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
    },
  });
  const parsedRes = await PlacesSchema.parseAsync(res.data);
  return parsedRes.features;
};
