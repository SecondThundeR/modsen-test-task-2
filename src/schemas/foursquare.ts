import { z } from "zod";

export const SearchSchema = z.object({
  results: z.array(
    z.object({
      fsq_id: z.string(),
      distance: z.number(),
    }),
  ),
});

const PhotoSchema = z.object({
  prefix: z.string(),
  suffix: z.string(),
});

export const PlaceSchema = z.object({
  photos: z.array(PhotoSchema).nullish(),
  rating: z.number().nullish(),
});

export type Place = z.infer<typeof PlaceSchema>;
