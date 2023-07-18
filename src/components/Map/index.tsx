import { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  LayerGroup,
  Circle,
} from "react-leaflet";

import { accommodationIcon, userIcon } from "@/constants/leaflet/icons";

import { PlacesProperties } from "@/schemas/geoapify";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

const FALLBACK_LATITUDE = 51.505;
const FALLBACK_LONGITUDE = -0.09;

function MapContents() {
  const [position, setPosition] = useState({
    lat: FALLBACK_LATITUDE,
    lng: FALLBACK_LONGITUDE,
  });
  const [places, setPlaces] = useState<PlacesProperties>();
  const map = useMap();

  map.addEventListener("locationfound", (event) => {
    const { lat, lng } = event.latlng;
    setPosition({
      lat,
      lng,
    });
    getLocationPlaces(lat, lng).then(setPlaces).catch(console.error);
    map.flyTo(event.latlng, map.getZoom());
  });

  useEffect(() => {
    map.locate({
      enableHighAccuracy: true,
      timeout: 10000,
    });
  }, []);

  if (!position) return null;

  return (
    <>
      <LayerGroup>
        <Marker position={position} icon={userIcon} />
        <Circle center={position} radius={1000} />
      </LayerGroup>

      {places?.map((place) => {
        const { lat, lon, name, address_line2, place_id } = place.properties;
        return (
          <Marker
            key={place_id}
            position={[lat, lon]}
            title={name ?? undefined}
            icon={accommodationIcon}
          >
            <Popup>{name ? `${name} (${address_line2})` : address_line2}</Popup>
          </Marker>
        );
      })}
    </>
  );
}

export function Map() {
  return (
    <MapContainer
      center={[FALLBACK_LATITUDE, FALLBACK_LONGITUDE]}
      zoom={15}
      scrollWheelZoom={true}
      className="h-screen w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapContents />
    </MapContainer>
  );
}
