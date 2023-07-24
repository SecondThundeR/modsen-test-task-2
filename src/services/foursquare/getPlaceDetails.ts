import axios from "axios";

import { BASE_URL } from "@/constants/foursquare/links";

import { PlaceSchema } from "@/schemas/foursquare";

import { parseResponse } from "@/utils/zod/parseResponse";

export const getPlaceDetails = async (fsq_id: string) => {
  const res = await axios.get(`${BASE_URL}/${fsq_id}`, {
    params: {
      fields: "rating,photos",
    },
    headers: {
      Authorization: import.meta.env.VITE_FOURSQUARE_KEY,
    },
  });
  return await parseResponse(res.data, PlaceSchema);
};
