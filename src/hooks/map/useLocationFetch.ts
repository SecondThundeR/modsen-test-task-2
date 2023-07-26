import { useCallback, useEffect, useState } from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { setPlaces } from "@/store/places";

export function useLocationFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  const {
    locationCoordinates: { lat, lng },
  } = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  const fetchLocationPlaces = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const places = await getLocationPlaces(lat, lng);
      dispatch(setPlaces(places));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, lat, lng]);

  useEffect(() => {
    fetchLocationPlaces();
  }, [fetchLocationPlaces]);

  return { isLoading, error };
}
