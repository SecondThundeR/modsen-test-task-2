import { useEffect, useState } from "react";
import { Placemark, Map as YMap } from "@pbe/react-yandex-maps";

const DEFAULT_COORDS = [55.75, 37.57];

export function Map() {
  const [coords, setCoords] = useState(DEFAULT_COORDS);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Lat: ${latitude}; Long: ${longitude}`);
          setCoords([latitude, longitude]);
        },
        console.error,
        {
          timeout: 5000,
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <YMap
      defaultState={{
        center: coords,
        zoom: 9,
        controls: ["zoomControl", "fullscreenControl"],
      }}
      modules={["control.ZoomControl", "control.FullscreenControl"]}
      className="h-screen w-full"
    >
      <Placemark
        modules={["geoObject.addon.balloon"]}
        defaultGeometry={coords}
        properties={{
          balloonContentBody:
            "This is balloon loaded by the Yandex.Maps API module system",
        }}
      />
    </YMap>
  );
}
