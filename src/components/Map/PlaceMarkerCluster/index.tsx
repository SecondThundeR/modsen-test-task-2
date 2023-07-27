import { memo } from "react";
import MarkerClusterGroup from "react-leaflet-cluster";

import { PlaceMarker } from "@/components/map/PlaceMarker";

import {
  categoriesArray,
  categoriesMapping,
} from "@/constants/geoapify/categories";
import { createIcon } from "@/constants/leaflet/icons";

import { PlacesState } from "@/store/places";

interface PlaceMarkerClusterProps extends PlacesState {}

export const PlaceMarkerCluster = memo(function PlaceMarkerCluster({
  places,
  searchPlaces,
}: PlaceMarkerClusterProps) {
  const mapPlaces = searchPlaces ?? places;

  return (
    <MarkerClusterGroup chunkedLoading maxClusterRadius={50}>
      {mapPlaces?.map((place) => {
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
