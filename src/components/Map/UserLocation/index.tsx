import { useContext } from "react";
import { LayerGroup, Marker, Circle, useMapEvent, useMap } from "react-leaflet";

import { LocatingStatusContext } from "@/contexts/LocatingStatusContext";

import { COLORS } from "@/constants/leaflet/colors";
import { userIcon } from "@/constants/leaflet/icons";

import { setLocation } from "@/features/location/locationSlice";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { isRequiredToUpdate } from "@/utils/coordinates/isRequiredToUpdate";

export function MapUserLocation() {
  const { locationCoordinates, locationRadius } = useAppSelector(
    (state) => state.location
  );
  const dispatch = useAppDispatch();
  const map = useMap();
  const { setIsLocating } = useContext(LocatingStatusContext);

  useMapEvent("locationfound", (event) => {
    setIsLocating(false);

    const { lat, lng } = event.latlng;
    if (
      !isRequiredToUpdate(locationCoordinates.lat, lat) ||
      !isRequiredToUpdate(locationCoordinates.lng, lng)
    )
      return;

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
        radius={locationRadius + 30}
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
