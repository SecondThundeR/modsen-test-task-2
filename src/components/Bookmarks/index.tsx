import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDetails } from "@/components/PlaceDetails";
import { Sidebar } from "@/components/Sidebar";

import { useBookmarks } from "@/hooks/places/useBookmarks";
import { useSelectedPlace } from "@/hooks/places/useSelectedPlace";

import { extractProperties } from "@/utils/bookmarks/extractProperties";
import { isPlaceBookmarked } from "@/utils/bookmarks/isPlaceBookmarked";

export function Bookmarks() {
  const { bookmarks, onBookmarkClick } = useBookmarks();
  const { selectedPlace, updatePlace, resetPlace } = useSelectedPlace();
  const isSelectedPlaceBookmarked = isPlaceBookmarked(bookmarks, selectedPlace);

  return (
    <Sidebar.PageWrapper>
      {selectedPlace ? (
        <PlaceDetails
          onBack={resetPlace}
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
            const properties = extractProperties(bookmark);
            const isBookmarked = isPlaceBookmarked(bookmarks, properties);

            return (
              <PlaceCard
                key={properties.place_id}
                onBookmarkClick={() =>
                  onBookmarkClick({
                    isBookmarked,
                    properties,
                  })
                }
                onArrowClick={() => updatePlace(properties)}
                isBookmarked={isBookmarked}
                {...properties}
              />
            );
          })}
        </>
      )}
    </Sidebar.PageWrapper>
  );
}
