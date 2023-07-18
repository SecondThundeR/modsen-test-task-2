import { LayerGroup, Marker, Circle, useMapEvent, useMap } from "react-leaflet";

import { COLORS } from "@/constants/leaflet/colors";
import { userIcon } from "@/constants/leaflet/icons";

import { setLocation } from "@/features/location/locationSlice";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function UserLocation() {
  const { locationCoordinates, locationRadius } = useAppSelector(
    (state) => state.location
  );
  const dispatch = useAppDispatch();
  const map = useMap();

  useMapEvent("locationfound", (event) => {
    const { lat, lng } = event.latlng;
    dispatch(
      setLocation({
        lat,
        lng,
      })
    );
    map.flyTo(event.latlng, map.getZoom());
  });

  return (
    <LayerGroup>
      <Marker position={locationCoordinates} icon={userIcon} />
      <Circle
        center={locationCoordinates}
        radius={locationRadius}
        fillColor={COLORS.primary}
        fillOpacity={0.2}
        dashArray="20 20"
        opacity={0.3}
      />
      <Circle
        center={locationCoordinates}
        radius={locationRadius / 10}
        fillColor={COLORS.primary}
        fillOpacity={0.3}
        stroke={false}
      />
    </LayerGroup>
  );
}
