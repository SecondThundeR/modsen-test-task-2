import { z } from "zod";

const PlaceProperties = z.object({
  lat: z.number(),
  lon: z.number(),
  name: z.string().nullish(),
  place_id: z.string(),
  address_line2: z.string(),
  categories: z.array(z.string()),
});

export const PlacesSchema = z.object({
  features: z.array(
    z.object({
      properties: PlaceProperties,
    })
  ),
});

export type PlacePropeties = z.infer<typeof PlaceProperties>;
export type PlacesProperties = z.infer<typeof PlacesSchema>["features"];
