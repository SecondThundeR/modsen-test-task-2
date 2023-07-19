import { useCallback } from "react";
import { useMap } from "react-leaflet";

export function useMapControls() {
  const map = useMap();

  const getLocation = useCallback(() => {
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

  return { getLocation, zoomIn, zoomOut };
}
