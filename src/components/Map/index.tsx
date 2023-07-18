import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { DEFAULT_ZOOM } from "@/constants/leaflet/defaultMapValues";
import { accommodationIcon } from "@/constants/leaflet/icons";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { PlacesProperties } from "@/schemas/geoapify";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { MapControls } from "../MapControls";
import { UserLocation } from "../UserLocation";

function MapContents() {
  const { lat, lng } = useAppSelector(
    (state) => state.location.locationCoordinates
  );
  const [places, setPlaces] = useState<PlacesProperties>();

  useEffect(() => {
    getLocationPlaces(lat, lng).then(setPlaces).catch(console.error);
  }, [lat, lng]);

  return (
    <>
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
      <MapContents />
      <UserLocation />
      <MapControls />
    </MapContainer>
  );
}
