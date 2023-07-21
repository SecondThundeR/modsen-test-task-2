import { PlaceMarkerCluster } from "@/components/PlaceMarkerCluster";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function MapPlaces() {
  const places = useAppSelector((state) => state.places);
  return (
    <PlaceMarkerCluster
      places={places.features}
      searchPlaces={places.searchFeatures}
    />
  );
}
