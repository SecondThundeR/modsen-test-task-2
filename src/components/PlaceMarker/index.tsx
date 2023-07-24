import { type Icon } from "leaflet";
import { memo } from "react";
import { Marker, Popup } from "react-leaflet";

import { type PlacesProperties } from "@/schemas/geoapify";

import { extractPlaceName } from "@/utils/geoapify/extractPlaceName";

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
  const placeName = extractPlaceName(name, address_line2);
  return (
    <Marker position={[lat, lon]} title={name ?? undefined} icon={icon}>
      {placeName && <Popup>{placeName}</Popup>}
    </Marker>
  );
});
