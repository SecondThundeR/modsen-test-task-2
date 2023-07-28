import { useCallback, useState } from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { getRoute } from "@/services/geoapify/getRoute";

import { resetRoute, setRoute } from "@/store/route";

export function useRoute() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const { data } = useAppSelector((state) => state.route);
  const { lat: locLat, lng: locLon } = useAppSelector(
    (state) => state.location.locationCoordinates,
  );
  const dispatch = useAppDispatch();

  const currentRouteData = data?.features[0].properties;

  const onRouteClick = useCallback(
    async (lat: number, lon: number) => {
      if (data) {
        dispatch(resetRoute());
        return;
      }
      setIsLoading(true);
      setError(null);

      try {
        const routeData = await getRoute([
          { lat: locLat, lon: locLon },
          { lat, lon },
        ]);
        dispatch(setRoute(routeData));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [data, dispatch, locLat, locLon],
  );

  const resetRouteData = useCallback(() => {
    dispatch(resetRoute());
  }, [dispatch]);

  return {
    currentRouteData,
    error,
    isLoading,
    onRouteClick,
    resetRouteData,
  };
}
