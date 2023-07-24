import { useState } from "react";

import { PlacesProperties } from "@/schemas/geoapify";

export function useSelectedPlace() {
  const [selectedPlace, setSelectedPlace] = useState<PlacesProperties | null>(
    null,
  );

  const updatePlace = (place: PlacesProperties) => {
    setSelectedPlace(place);
  };

  const resetPlace = () => {
    setSelectedPlace(null);
  };

  return { selectedPlace, updatePlace, resetPlace };
}
