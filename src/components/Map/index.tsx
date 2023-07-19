import { MapContainer, TileLayer } from "react-leaflet";

import { MapControls } from "@/components/MapControls";
import { PlaceMarkerCluster } from "@/components/PlaceMarkerCluster";
import { UserLocation } from "@/components/UserLocation";

import { DEFAULT_ZOOM } from "@/constants/leaflet/defaultMapValues";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

function MapPlaces() {
  const places = useAppSelector((state) => state.places);
  return <PlaceMarkerCluster places={places.features} />;
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
