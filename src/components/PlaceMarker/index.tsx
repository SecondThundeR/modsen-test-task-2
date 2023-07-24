import { type Icon } from "leaflet";
import { memo } from "react";
import { Marker, Popup } from "react-leaflet";

import { type PlacesProperties } from "@/schemas/geoapify";

interface PlaceMarkerProperties
  extends Omit<PlacesProperties, "place_id" | "categories"> {
  icon?: Icon;
}

export const PlaceMarker = memo(function PlaceMarker({
  lat,
  lon,
  name,
  address_line2,
  icon,
}: PlaceMarkerProperties) {
  return (
    <Marker position={[lat, lon]} title={name ?? undefined} icon={icon}>
      <Popup>{name ? `${name} (${address_line2})` : address_line2}</Popup>
    </Marker>
  );
});
