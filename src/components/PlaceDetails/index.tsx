import { memo } from "react";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as BookmarkFilledIcon } from "@/assets/bookmarkFilled.svg";
import { ReactComponent as LocationIcon } from "@/assets/location.svg";

import { AlertError } from "@/components/ui/AlertError";
import { BackButton } from "@/components/ui/BackButton";
import { CategoryIcons } from "@/components/ui/CategoryIcons";
import { RouteCard } from "@/components/ui/RouteCard";
import { Spinner } from "@/components/ui/Spinner";

import { useRoute } from "@/hooks/map/useRoute";
import { usePlaceDetails } from "@/hooks/places/usePlaceDetails";

import { PlacesProperties } from "@/schemas/geoapify";

interface PlaceDetailsProps extends Omit<PlacesProperties, "place_id"> {
  isBookmarked?: boolean;
  onBack?: () => void;
  onBookmarkClick?: () => void;
}

export const PlaceDetails = memo(function PlaceDetails({
  categories,
  lat,
  lon,
  address_line2,
  name,
  datasource: { raw },
  isBookmarked = false,
  onBack,
  onBookmarkClick,
}: PlaceDetailsProps) {
  const { placeDetails, error, isLoading } = usePlaceDetails(
    lat,
    lon,
    name ?? raw["name:ru"] ?? "",
  );
  const {
    routeData,
    error: routeError,
    isLoading: isLoadingRoute,
    onRouteClick,
  } = useRoute();
  const imageData = placeDetails?.photos?.[0];

  if (isLoading) return <Spinner />;

  const setRoute = () => onRouteClick(lat, lon);

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <BackButton onBack={onBack} />
          <AlertError error={error ?? routeError} />

          <div className="relative mb-2">
            <div className="absolute bottom-0 m-3 flex w-24">
              {categories.map((category) => (
                <CategoryIcons key={category} category={category} />
              ))}
            </div>
            <img
              className="h-60 w-full rounded-xl bg-base-content object-cover"
              width={500}
              height={300}
              src={
                imageData
                  ? imageData.prefix + "original" + imageData.suffix
                  : ""
              }
              alt={name ?? ""}
              title={name ?? ""}
            />
          </div>
          <h1 className="line-clamp-2 text-2xl font-bold">{name}</h1>
          {address_line2 && <p className="opacity-80">{address_line2}</p>}
          {placeDetails?.rating && (
            <p className="text-primary">Rating: {placeDetails.rating}</p>
          )}
          <div className="mt-2 flex justify-between">
            <button
              className="btn btn-primary btn-outline"
              onClick={onBookmarkClick}
            >
              {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </button>
            <button className="btn btn-primary" onClick={setRoute}>
              {isLoadingRoute ? <Spinner /> : <LocationIcon />}
              {!routeData ? "Route" : "Reset route"}
            </button>
          </div>
          {routeData && (
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Route details:</h1>
              <RouteCard routeData={routeData} />
            </div>
          )}
        </>
      )}
    </div>
  );
});
