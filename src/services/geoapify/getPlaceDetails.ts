import { PLACE_DETAILS_ENDPOINT } from "@/constants/geoapify/links";

import { PlaceDetailsSchema } from "@/schemas/geoapify";

import { fetcher } from "@/services/geoapify/fetcher";

export const getPlaceDetails = async (placeId: string) => {
  const res = await fetcher.get(PLACE_DETAILS_ENDPOINT, {
    params: {
      id: placeId,
      features: "details",
      lang: "ru",
      apiKey: import.meta.env.VITE_GEOAPIFY_KEY,
    },
  });
  const parsedRes = await PlaceDetailsSchema.parseAsync(res.data);
  return parsedRes.features;
};
