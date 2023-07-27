import { z } from "zod";

const PlacesPropertiesSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  name: z.string().nullish(),
  place_id: z.string(),
  address_line2: z.string().nullish(),
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

const WaypointSchema = z.object({
  lat: z.number(),
  lon: z.number(),
});

export const RouteSchema = z.object({
  features: z.array(
    z.object({
      type: z.literal("Feature"),
      properties: z.object({
        distance: z.number(),
        time: z.number(),
      }),
      geometry: z.object({
        type: z.literal("MultiLineString"),
        coordinates: z.array(z.array(z.array(z.number()))),
      }),
    }),
  ),
  properties: z.object({
    waypoints: z.array(WaypointSchema),
  }),
  type: z.literal("FeatureCollection"),
});

export type PlacesProperties = z.infer<typeof PlacesPropertiesSchema>;
export type Places = z.infer<typeof PlacesSchema>["features"];
export type Route = z.infer<typeof RouteSchema>;
export type Waypoint = z.infer<typeof WaypointSchema>;
