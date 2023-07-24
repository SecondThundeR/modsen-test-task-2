import { useCallback, useEffect, useState } from "react";

import { Place } from "@/schemas/foursquare";

import { getPlaceDetails } from "@/services/foursquare/getPlaceDetails";
import { getPlaceID } from "@/services/foursquare/getPlaceID";

export function usePlaceDetails(lat: number, lon: number, name: string) {
  const [placeDetails, setPlaceDetails] = useState<Place | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDetails = useCallback(async () => {
    setIsLoading(true);
    const placeID = await getPlaceID(lat, lon, name);
    const place = await getPlaceDetails(placeID);
    setPlaceDetails(place);
    setIsLoading(false);
  }, [lat, lon, name]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return { placeDetails, isLoading };
}
