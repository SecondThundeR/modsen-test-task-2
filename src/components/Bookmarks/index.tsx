import { PlaceDetails } from "@/components/PlaceDetails";
import { PlaceCard } from "@/components/ui/PlaceCard";
import { Sidebar } from "@/components/ui/Sidebar";

import { useRoute } from "@/hooks/map/useRoute";
import { useBookmarks } from "@/hooks/places/useBookmarks";
import { useSelectedPlace } from "@/hooks/places/useSelectedPlace";

import { extractProperties } from "@/utils/bookmarks/extractProperties";
import { isPlaceBookmarked } from "@/utils/bookmarks/isPlaceBookmarked";

export function Bookmarks() {
  const { bookmarks, onBookmarkClick } = useBookmarks();
  const { selectedPlace, updatePlace, resetPlace } = useSelectedPlace();
  const { resetRouteData } = useRoute();
  const isSelectedPlaceBookmarked = isPlaceBookmarked(bookmarks, selectedPlace);

  const resetPlaceDetails = () => {
    resetPlace();
    resetRouteData();
  };

  const bookmarkSelectedPlace = () =>
    onBookmarkClick({
      isBookmarked: isSelectedPlaceBookmarked,
      properties: selectedPlace,
    });

  return (
    <Sidebar.PageWrapper>
      {selectedPlace ? (
        <PlaceDetails
          onBack={resetPlaceDetails}
          onBookmarkClick={bookmarkSelectedPlace}
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
            const bookmarkPlace = () =>
              onBookmarkClick({
                isBookmarked,
                properties,
              });
            const setNewPlace = () => updatePlace(properties);

            return (
              <PlaceCard
                key={properties.place_id}
                onBookmarkClick={bookmarkPlace}
                onArrowClick={setNewPlace}
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
