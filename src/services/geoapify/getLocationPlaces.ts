import { categoriesArray } from "@/constants/geoapify/categories";
import { PLACES_ENDPOINT } from "@/constants/geoapify/links";

import { PlacesSchema } from "@/schemas/geoapify";

import { fetcher } from "@/services/geoapify/fetcher";

export const getLocationPlaces = async (
  lat: number,
  lon: number,
  radius: number = 1000,
  categories: string = "",
  search: string = "",
) => {
  const res = await fetcher.get(PLACES_ENDPOINT, {
    params: {
      categories: !categories ? categoriesArray.join(",") : categories,
      filter: `circle:${lon},${lat},${radius}`,
      limit: 100,
      offset: 0,
      name: search || undefined,
      lang: "ru",
      apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
    },
  });
  const parsedRes = await PlacesSchema.parseAsync(res.data);
  return parsedRes.features;
};
