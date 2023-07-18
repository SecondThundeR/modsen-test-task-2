import { memo } from "react";
import { type Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { type PlacePropeties } from "@/schemas/geoapify";

interface PlaceMarkerProperties
  extends Pick<PlacePropeties, "lat" | "lon" | "name" | "address_line2"> {
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
