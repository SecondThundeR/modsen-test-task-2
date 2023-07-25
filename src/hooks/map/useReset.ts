import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { resetRadius } from "@/store/location";
import { resetSearchPlaces } from "@/store/places";
import { resetRoute } from "@/store/route";

export function useReset() {
  const [prevPath, setPrevPath] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const resetData = useCallback(() => {
    dispatch(resetRadius());
    dispatch(resetRoute());
    dispatch(resetSearchPlaces());
  }, [dispatch]);

  useEffect(() => {
    if (prevPath === null) {
      setPrevPath(location.pathname);
      return;
    }

    if (location.pathname === ROUTES.home && prevPath !== ROUTES.home) {
      resetData();
    }

    setPrevPath(location.pathname);
  }, [location.pathname]);
}
