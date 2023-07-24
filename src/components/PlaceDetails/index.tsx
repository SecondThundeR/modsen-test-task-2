import { memo } from "react";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as BookmarkFilledIcon } from "@/assets/bookmarkFilled.svg";

import { BackButton } from "@/components/BackButton";
import { CategoryIcons } from "@/components/CategoryIcons";
import { Spinner } from "@/components/Spinner";

import { usePlaceDetails } from "@/hooks/map/usePlaceDetails";

import { PlacesPropeties } from "@/schemas/geoapify";

interface PlaceDetailsProps
  extends Omit<PlacesPropeties, "place_id" | "address_line2" | "name"> {
  isBookmarked?: boolean;
  onBack?: () => void;
  onBookmarkClick?: () => void;
}

export const PlaceDetails = memo(function PlaceDetails({
  categories,
  lat,
  lon,
  datasource: { raw },
  isBookmarked = false,
  onBack,
  onBookmarkClick,
}: PlaceDetailsProps) {
  const { placeDetails, isLoading } = usePlaceDetails(
    lat,
    lon,
    raw["name:ru"] ?? "",
  );
  const imageData = placeDetails?.photos?.[0];

  if (isLoading) return <Spinner />;

  return (
    <div className="flex w-full flex-col gap-2 rounded-xl">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <BackButton onBack={onBack} />

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
              alt={placeDetails?.name}
              title={placeDetails?.name}
            />
          </div>
          <h1 className="line-clamp-2 text-2xl font-bold">
            {placeDetails?.name}
          </h1>
          <p className="opacity-80">
            {placeDetails?.location.formatted_address}
          </p>
          <p className="text-primary">
            Rating: {placeDetails?.rating ?? "Unavailable"}
          </p>
          <div className="mt-2 flex justify-between">
            <button
              className="btn btn-primary btn-outline"
              onClick={onBookmarkClick}
            >
              {isBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
            </button>
            <button className="btn btn-primary">Маршрут</button>
          </div>
        </>
      )}
    </div>
  );
});
