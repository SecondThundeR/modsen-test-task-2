import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "@/components/BackButton";
import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDetails } from "@/components/PlaceDetails";
import { Spinner } from "@/components/Spinner";

import { useBookmarks } from "@/hooks/map/useBookmarks";
import { usePlacesFetch } from "@/hooks/search/usePlacesFetch";

import { PlacesProperties } from "@/schemas/geoapify";

export function SearchResults() {
  const navigate = useNavigate();
  const { searchPlaces, isLoading, resetFetch } = usePlacesFetch();
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarks();
  const [selectedPlace, setSelectedPlace] = useState<PlacesProperties | null>(
    null,
  );

  const isSelectedPlaceBookmarked =
    bookmarks.findIndex(
      (bookmark) => Object.keys(bookmark)[0] === selectedPlace?.place_id,
    ) !== -1;

  const onBack = useCallback(() => {
    resetFetch();
    navigate(-1);
  }, [navigate, resetFetch]);

  const selectPlace = (place: PlacesProperties) => {
    setSelectedPlace(place);
  };

  const resetSelectedPlace = () => {
    setSelectedPlace(null);
  };

  const onBookmarkClick = useCallback(
    async (options: {
      isBookmarked?: boolean;
      properties: PlacesProperties;
    }) => {
      const { isBookmarked, properties } = options;
      if (!properties) return;
      isBookmarked
        ? await deleteBookmark(properties.place_id)
        : await addBookmark(properties);
    },
    [addBookmark, deleteBookmark],
  );

  return (
    <div className="flex h-full w-80 flex-col items-center gap-3 overflow-auto bg-base-300 p-4">
      {selectedPlace ? (
        <PlaceDetails
          onBack={resetSelectedPlace}
          onBookmarkClick={() =>
            onBookmarkClick({
              isBookmarked: isSelectedPlaceBookmarked,
              properties: selectedPlace,
            })
          }
          isBookmarked={isSelectedPlaceBookmarked}
          {...selectedPlace}
        />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <BackButton onBack={onBack} />

          {searchPlaces?.map((place) => {
            const { place_id } = place.properties;
            const isBookmarked =
              bookmarks.findIndex(
                (bookmark) => Object.keys(bookmark)[0] === place_id,
              ) !== -1;

            return (
              <PlaceCard
                key={place_id}
                onBookmarkClick={() =>
                  onBookmarkClick({
                    isBookmarked,
                    properties: place.properties,
                  })
                }
                onArrowClick={() => selectPlace(place.properties)}
                isBookmarked={isBookmarked}
                {...place.properties}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
