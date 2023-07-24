import { z } from "zod";

const PlacesPropertiesSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  name: z.string().nullish(),
  place_id: z.string(),
  address_line2: z.string(),
  categories: z.array(z.string()),
  datasource: z.object({
    raw: z.object({
      "name:ru": z.string().nullish(),
    }),
  }),
});

export const PlacesSchema = z.object({
  features: z.array(
    z.object({
      properties: PlacesPropertiesSchema,
    }),
  ),
});

export type PlacesProperties = z.infer<typeof PlacesPropertiesSchema>;
export type Places = z.infer<typeof PlacesSchema>["features"];
