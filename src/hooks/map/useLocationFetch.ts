import { useEffect, useState } from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { setPlaces } from "@/store/places";

export function useLocationFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const {
    locationCoordinates: { lat, lng },
  } = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    getLocationPlaces(lat, lng)
      .then((places) => dispatch(setPlaces(places)))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [dispatch, lat, lng, getLocationPlaces]);

  return { isLoading, error };
}
