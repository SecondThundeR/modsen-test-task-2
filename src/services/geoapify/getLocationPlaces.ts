import { categoriesArray } from "@/constants/geoapify/categories";
import { PLACES_ENDPOINT } from "@/constants/geoapify/links";

import { PlacesSchema } from "@/schemas/geoapify";

import { fetcher } from "@/services/geoapify/fetcher";

import { parseResponse } from "@/utils/zod/parseResponse";

const buildParams = (
  lat: number,
  lon: number,
  radius: number,
  categories: string,
  search: string,
) => {
  return {
    categories: !categories ? categoriesArray.join(",") : categories,
    filter: `circle:${lon},${lat},${radius}`,
    limit: 100,
    offset: 0,
    name: search || undefined,
    lang: "ru",
    apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
  };
};

export const getLocationPlaces = async (
  lat: number,
  lon: number,
  radius: number = 1000,
  categories: string = "",
  search: string = "",
) => {
  const params = buildParams(lat, lon, radius, categories, search);
  const res = await fetcher.get(PLACES_ENDPOINT, { params });
  return (await parseResponse(res.data, PlacesSchema)).features;
};
