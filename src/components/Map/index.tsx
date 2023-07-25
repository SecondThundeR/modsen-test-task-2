import { MapContainer, TileLayer } from "react-leaflet";

import { MapAlerts } from "@/components/Map/Alerts";
import { MapControls } from "@/components/Map/Controls";
import { MapPlaces } from "@/components/Map/Places";
import { MapRoute } from "@/components/Map/Route";
import { MapUserLocation } from "@/components/Map/UserLocation";

import { DEFAULT_ZOOM } from "@/constants/leaflet/defaultMapValues";

import { useLocationFetch } from "@/hooks/map/useLocationFetch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

export function Map() {
  const locationCoordinates = useAppSelector(
    (state) => state.location.locationCoordinates,
  );
  const { isLoading, error } = useLocationFetch();

  return (
    <MapContainer
      center={locationCoordinates}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={true}
      zoomControl={false}
      className="z-0 h-screen w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapPlaces />
      <MapUserLocation />
      <MapControls />
      <MapAlerts isLoading={isLoading} error={error} />
      <MapRoute />
    </MapContainer>
  );
}
