import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

const FALLBACK_LATITUDE = 51.505;
const FALLBACK_LONGITUDE = -0.09;

function UserLocation() {
  const [position, setPosition] = useState<LatLng | null>();
  const map = useMap();

  map.addEventListener("locationfound", (event) => {
    setPosition(event.latlng);
    map.flyTo(event.latlng, map.getZoom());
  });

  useEffect(() => {
    map.locate({
      enableHighAccuracy: true,
      timeout: 10000,
    });
  }, [map]);

  if (!position) return null;

  return (
    <Marker position={position}>
      <Popup>You are currently here!</Popup>
    </Marker>
  );
}

export function Map() {
  return (
    <MapContainer
      center={[FALLBACK_LATITUDE, FALLBACK_LONGITUDE]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-screen w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserLocation />
    </MapContainer>
  );
}
