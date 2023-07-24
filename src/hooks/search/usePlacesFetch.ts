import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { useSearch } from "@/hooks/search/useSearch";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { resetRadius, setRadius } from "@/store/location";
import { resetSearchPlaces, setSearchPlaces } from "@/store/places";

export function usePlacesFetch() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    params: { search, selectedCategories, selectedRadius },
  } = useSearch();
  const {
    locationCoordinates: { lat, lng },
  } = useAppSelector((state) => state.location);
  const { searchPlaces } = useAppSelector((state) => state.places);
  const dispatch = useAppDispatch();

  const resetFetch = useCallback(() => {
    dispatch(resetRadius());
    dispatch(resetSearchPlaces());
  }, [dispatch]);

  const onBack = useCallback(() => {
    resetFetch();
    navigate(-1);
  }, [navigate, resetFetch]);

  useEffect(() => {
    const radius = +selectedRadius!;

    dispatch(setRadius(radius));
    setIsLoading(true);

    getLocationPlaces(lat, lng, radius, selectedCategories!, search!)
      .then((data) => {
        const filteredPlaces = data.filter(
          (place) => place.properties.name !== undefined,
        );
        dispatch(setSearchPlaces(filteredPlaces));
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [lat, lng, selectedCategories, search, selectedRadius]);

  return { searchPlaces, isLoading, onBack };
}
