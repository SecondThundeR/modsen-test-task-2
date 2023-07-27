import { GeoJSON, Marker } from "react-leaflet";

import { COLORS } from "@/constants/mapColors";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function MapRoute() {
  const { data, endWaypoint } = useAppSelector((state) => state.route);

  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      style={{
        color: COLORS.primary,
        weight: 8,
        opacity: 0.7,
      }}
    >
      <Marker position={{ lat: endWaypoint.lat, lng: endWaypoint.lon }} />
    </GeoJSON>
  );
}
