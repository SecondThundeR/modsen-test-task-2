import { memo } from "react";

import { PlaceMarker } from "@/components/PlaceMarker";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/geoapify/categories";

import { PlacesProperties } from "@/schemas/geoapify";

export const PlaceMarkerCluster = memo(function PlaceMarkerCluster({
  places,
}: {
  places?: PlacesProperties;
}) {
  return (
    <>
      {places?.map((place) => {
        const { categories, place_id, ...rest } = place.properties;
        const placeCategory = categories.find((category) =>
          categoriesArray.includes(category)
        );
        const categoryIcon = placeCategory
          ? categoriesMapping[placeCategory]
          : undefined;

        return <PlaceMarker key={place_id} icon={categoryIcon} {...rest} />;
      })}
    </>
  );
});
