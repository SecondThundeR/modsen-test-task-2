import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { useSearch } from "@/hooks/search/useSearch";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { resetRadius, setRadius } from "@/store/location";
import { resetSearchPlaces, setSearchPlaces } from "@/store/places";

import { Spinner } from "../Spinner";

export function SearchResults() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const {
    params: { search, selectedCategories, selectedRadius },
    isMissingParams,
  } = useSearch();
  const {
    locationCoordinates: { lat, lng },
  } = useAppSelector((state) => state.location);
  const { searchFeatures } = useAppSelector((state) => state.places);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMissingParams) return navigate(ROUTES.home);

    const newRadius = +selectedRadius! * 1000;
    dispatch(setRadius(newRadius));
    getLocationPlaces(lat, lng, newRadius, selectedCategories!, search!)
      .then((data) => dispatch(setSearchPlaces(data)))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [
    dispatch,
    isMissingParams,
    lat,
    lng,
    navigate,
    search,
    selectedCategories,
    selectedRadius,
  ]);

  const onBack = () => {
    navigate(-1);
    dispatch(resetRadius());
    dispatch(resetSearchPlaces());
  };

  return (
    <div className="bg-base-300 h-full w-80 p-4 flex flex-col items-center gap-3 overflow-auto">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <button className="link link-primary link-hover" onClick={onBack}>
            Go back
          </button>
          {searchFeatures?.map((feature) => {
            const { lat, lon, place_id, name, address_line2, categories } =
              feature.properties;
            return (
              <div key={place_id} className="bg-base-100 p-4 rounded-xl">
                <h1 className="font-bold">{name}</h1>
                <p className="opacity-80">{address_line2}</p>
                <div className="divider"></div>
                <p>Categories: {categories.join(", ")}</p>
                <p>
                  Coordinates: {lat}; {lon}
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
