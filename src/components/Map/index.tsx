import { MapContainer, TileLayer } from "react-leaflet";

import { MapControls } from "@/components/Map/Controls";
import { MapPlaces } from "@/components/Map/Places";
import { MapUserLocation } from "@/components/Map/UserLocation";

import { DEFAULT_ZOOM } from "@/constants/leaflet/defaultMapValues";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

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
      <Map.Places />
      <Map.UserLocation />
      <Map.Controls />
    </MapContainer>
  );
}

Map.Places = MapPlaces;
Map.Controls = MapControls;
Map.UserLocation = MapUserLocation;
