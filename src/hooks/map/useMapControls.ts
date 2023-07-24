import { useCallback, useState } from "react";
import { useMap, useMapEvent } from "react-leaflet";

export function useMapControls() {
  const map = useMap();
  const [isLocating, setIsLocating] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  useMapEvent("locationfound", () => setIsLocating(false));

  useMapEvent("locationerror", (event) => {
    console.error("Failed to get location. Details:", event);

    setIsLocating(false);
    setIsFailed(true);
  });

  const getLocation = useCallback(() => {
    setIsLocating(true);
    setIsFailed(false);

    map.locate({
      enableHighAccuracy: true,
      timeout: 10000,
    });
  }, [map]);

  const zoomIn = useCallback(() => {
    map.zoomIn(undefined, {
      animate: true,
    });
  }, [map]);

  const zoomOut = useCallback(() => {
    map.zoomOut(undefined, {
      animate: true,
    });
  }, [map]);

  return {
    isLocating,
    isFailed,
    handlers: {
      getLocation,
      zoomIn,
      zoomOut,
    },
  };
}
