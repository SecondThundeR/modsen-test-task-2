import { memo } from "react";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as BookmarkFilledIcon } from "@/assets/bookmarkFilled.svg";
import { ReactComponent as LocationIcon } from "@/assets/location.svg";

import { AlertError } from "@/components/ui/AlertError";
import { Button } from "@/components/ui/Button";
import { CategoryIcons } from "@/components/ui/CategoryIcons";
import { Heading } from "@/components/ui/Heading";
import { PlaceNameHeading } from "@/components/ui/PlaceNameHeading";
import { RouteCard } from "@/components/ui/RouteCard";
import { Spinner } from "@/components/ui/Spinner";
import { Subheading } from "@/components/ui/Subheading";

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
  const placeName = name ?? raw["name:ru"] ?? "";
  const { placeDetails, error, isLoading } = usePlaceDetails(
    lat,
    lon,
    placeName,
  );
  const {
    currentRouteData,
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
          <Button onClick={onBack}>Go back</Button>
          <AlertError error={error ?? routeError} />

          {imageData && (
            <img
              className="h-60 w-full rounded-xl object-cover"
              width={500}
              height={300}
              src={imageData.prefix + "original" + imageData.suffix}
              alt={placeName}
              title={placeName}
            />
          )}
          <div className="flex flex-col gap-2">
            {categories?.map((category) => (
              <CategoryIcons key={category} category={category} />
            ))}
            <PlaceNameHeading>{name}</PlaceNameHeading>
          </div>
          {address_line2 && <Subheading>{address_line2}</Subheading>}
          {placeDetails?.rating && (
            <p className="text-primary">Rating: {placeDetails.rating}</p>
          )}
          <div className="mt-2 flex justify-between">
            <Button className="btn-outline" onClick={onBookmarkClick}>
              {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </Button>
            <Button onClick={setRoute}>
              {isLoadingRoute ? <Spinner /> : <LocationIcon />}
              {!currentRouteData ? "Route" : "Reset route"}
            </Button>
          </div>
          {currentRouteData && (
            <div className="flex flex-col gap-2">
              <Heading>Route details:</Heading>
              <RouteCard routeData={currentRouteData} />
            </div>
          )}
        </>
      )}
    </div>
  );
});
