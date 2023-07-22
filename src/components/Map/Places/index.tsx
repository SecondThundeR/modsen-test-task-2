import { PlaceMarkerCluster } from "@/components/PlaceMarkerCluster";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function MapPlaces() {
  const { places, searchPlaces } = useAppSelector((state) => state.places);
  return <PlaceMarkerCluster places={places} searchPlaces={searchPlaces} />;
}
