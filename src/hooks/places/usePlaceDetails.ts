import { useCallback, useEffect, useState } from "react";

import { Place } from "@/schemas/foursquare";

import { getPlaceDetails } from "@/services/foursquare/getPlaceDetails";
import { getPlaceID } from "@/services/foursquare/getPlaceID";

export function usePlaceDetails(lat: number, lon: number, name: string) {
  const [placeDetails, setPlaceDetails] = useState<Place | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchDetails = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const placeID = await getPlaceID(lat, lon, name);
      const place = await getPlaceDetails(placeID);
      setPlaceDetails(place);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [lat, lon, name]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return { placeDetails, error, isLoading };
}
