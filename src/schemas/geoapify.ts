import { z } from "zod";

const PlacesPropertiesSchema = z.object({
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
      properties: PlacesPropertiesSchema,
    }),
  ),
});

const PlaceDetailsPropertiesSchema = PlacesPropertiesSchema.merge(
  z.object({
    website: z.string(),
    description: z.string(),
    contact: z.object({
      phone: z.string(),
    }),
  }),
);

export const PlaceDetailsSchema = z.object({
  features: z.array(
    z.object({
      properties: PlaceDetailsPropertiesSchema,
    }),
  ),
});

export type PlacesPropeties = z.infer<typeof PlacesPropertiesSchema>;
export type Places = z.infer<typeof PlacesSchema>["features"];

export type PlaceDetailsPropeties = z.infer<
  typeof PlaceDetailsPropertiesSchema
>;
export type PlaceDetails = z.infer<typeof PlaceDetailsSchema>["features"];
