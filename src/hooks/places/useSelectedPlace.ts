import { useCallback, useState } from "react";

import { PlacesProperties } from "@/schemas/geoapify";

export function useSelectedPlace() {
  const [selectedPlace, setSelectedPlace] = useState<PlacesProperties | null>(
    null,
  );

  const updatePlace = useCallback(
    (place: PlacesProperties) => {
      setSelectedPlace(place);
    },
    [setSelectedPlace],
  );

  const resetPlace = useCallback(() => {
    setSelectedPlace(null);
  }, [setSelectedPlace]);

  return { selectedPlace, updatePlace, resetPlace };
}
