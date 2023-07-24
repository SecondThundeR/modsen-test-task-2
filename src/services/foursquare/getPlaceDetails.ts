import { BASE_URL } from "@/constants/foursquare/links";

import { PlaceSchema } from "@/schemas/foursquare";

import { fetcher } from "@/services/geoapify/fetcher";

import { parseResponse } from "@/utils/zod/parseResponse";

export const getPlaceDetails = async (fsq_id: string) => {
  const res = await fetcher.get(`${BASE_URL}/${fsq_id}`, {
    params: {
      fields: "name,location,description,rating,photos",
    },
    headers: {
      Authorization: import.meta.env.VITE_FOURSQUARE_KEY,
    },
  });
  return await parseResponse(res.data, PlaceSchema);
};
