import { useCallback, useContext } from "react";
import { useMap } from "react-leaflet";

import { LocatingStatusContext } from "@/contexts/LocatingStatusContext";

export function useMapControls() {
  const map = useMap();
  const { isLocating, setIsLocating } = useContext(LocatingStatusContext);

  const getLocation = useCallback(() => {
    setIsLocating(true);
    map.locate({
      enableHighAccuracy: true,
      timeout: 10000,
    });
  }, [map, setIsLocating]);

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

  return { getLocation, isLocating, zoomIn, zoomOut };
}
