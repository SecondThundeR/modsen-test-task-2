import { z } from "zod";

export const GeocodeReverseSchema = z.object({
  results: z.array(
    z.object({
      place_id: z.string(),
    })
  ),
});

export const PlacesSchema = z.object({
  features: z.array(
    z.object({
      properties: z.object({
        lat: z.number(),
        lon: z.number(),
        name: z.string().nullish(),
        place_id: z.string(),
        address_line2: z.string(),
      }),
    })
  ),
});

export type PlacesProperties = z.infer<typeof PlacesSchema>["features"];
