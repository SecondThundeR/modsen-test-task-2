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
    params: { searchQuery, selectedCategories, selectedRadius },
  } = useSearch();
  const {
    locationCoordinates: { lat, lng },
  } = useAppSelector((state) => state.location);
  const { searchPlaces } = useAppSelector((state) => state.places);
  const dispatch = useAppDispatch();

  const onBack = useCallback(() => {
    dispatch(resetRadius());
    dispatch(resetSearchPlaces());
    navigate(-1);
  }, [navigate, dispatch]);

  const fetchPlaces = useCallback(async () => {
    const radius = +selectedRadius!;

    dispatch(setRadius(radius));
    setIsLoading(true);

    try {
      const data = await getLocationPlaces(
        lat,
        lng,
        radius,
        selectedCategories!,
        searchQuery!,
      );
      const filteredPlaces = data.filter(
        (place) => place.properties.name !== undefined,
      );
      dispatch(setSearchPlaces(filteredPlaces));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, lat, lng, selectedCategories, searchQuery, selectedRadius]);

  useEffect(() => {
    fetchPlaces();
  }, [fetchPlaces]);

  return { searchPlaces, isLoading, onBack };
}
