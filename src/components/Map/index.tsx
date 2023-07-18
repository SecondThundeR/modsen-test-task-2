import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import { MapControls } from "@/components/MapControls";
import { PlaceMarkerCluster } from "@/components/PlaceMarkerCluster";
import { UserLocation } from "@/components/UserLocation";

import { DEFAULT_ZOOM } from "@/constants/leaflet/defaultMapValues";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { PlacesProperties } from "@/schemas/geoapify";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

function MapPlaces() {
  const {
    locationCoordinates: { lat, lng },
    locationRadius,
  } = useAppSelector((state) => state.location);
  const [places, setPlaces] = useState<PlacesProperties>();

  useEffect(() => {
    setPlaces([]);
    getLocationPlaces(lat, lng, locationRadius)
      .then(setPlaces)
      .catch(console.error);
  }, [lat, lng, locationRadius]);

  return <PlaceMarkerCluster places={places} />;
}

export function Map() {
  const locationCoordinates = useAppSelector(
    (state) => state.location.locationCoordinates
  );

  return (
    <MapContainer
      center={locationCoordinates}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={true}
      zoomControl={false}
      className="h-screen w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapPlaces />
      <UserLocation />
      <MapControls />
    </MapContainer>
  );
}
