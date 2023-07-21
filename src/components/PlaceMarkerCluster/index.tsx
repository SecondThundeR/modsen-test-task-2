import { memo } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";

import { PlaceMarker } from "@/components/PlaceMarker";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/geoapify/categories";
import { createIcon } from "@/constants/leaflet/icons";

import { PlacesProperties } from "@/schemas/geoapify";

export const PlaceMarkerCluster = memo(function PlaceMarkerCluster({
  places,
}: {
  places?: PlacesProperties;
}) {
  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
      {places?.map((place) => {
        const { categories, place_id, ...rest } = place.properties;
        const placeCategory = categories.find((category) =>
          categoriesArray.includes(category),
        );
        const categoryIcon = placeCategory
          ? createIcon(categoriesMapping[placeCategory].url)
          : undefined;

        return <PlaceMarker key={place_id} icon={categoryIcon} {...rest} />;
      })}
    </MarkerClusterGroup>
  );
});
