import { PLACE_DETAILS_ENDPOINT } from "@/constants/geoapify/links";

import { PlaceDetailsSchema } from "@/schemas/geoapify";

import { fetcher } from "@/services/geoapify/fetcher";

import { parseResponse } from "@/utils/zod/parseResponse";

const buildParams = (placeId: string) => {
  return {
    id: placeId,
    features: "details",
    lang: "ru",
    apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
  };
};

export const getPlaceDetails = async (placeId: string) => {
  const params = buildParams(placeId);
  const res = await fetcher.get(PLACE_DETAILS_ENDPOINT, { params });
  return (await parseResponse(res.data, PlaceDetailsSchema)).features;
};
