import { useCallback, useState } from "react";

import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDetails } from "@/components/PlaceDetails";

import { useBookmarks } from "@/hooks/map/useBookmarks";

import { PlacesProperties } from "@/schemas/geoapify";

export function Bookmarks() {
  const { bookmarks, addBookmark, deleteBookmark } = useBookmarks();
  const [selectedPlace, setSelectedPlace] = useState<PlacesProperties | null>(
    null,
  );

  const isSelectedPlaceBookmarked =
    bookmarks.findIndex(
      (bookmark) => Object.keys(bookmark)[0] === selectedPlace?.place_id,
    ) !== -1;

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
      ) : (
        <>
          <h1 className="text-xl font-bold">Bookmarks:</h1>
          {bookmarks?.length === 0 && <h1>You have no bookmarks yet</h1>}
          {bookmarks?.map((bookmark) => {
            const place_id = Object.keys(bookmark)[0];
            const properties = { ...bookmark[place_id], place_id };
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
                    properties,
                  })
                }
                onArrowClick={() => selectPlace(properties)}
                isBookmarked={isBookmarked}
                {...properties}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
