import { BackButton } from "@/components/ui/BackButton";
import { PlaceCard } from "@/components/ui/PlaceCard";
import { PlaceDetails } from "@/components/ui/PlaceDetails";
import { Sidebar } from "@/components/ui/Sidebar";
import { Spinner } from "@/components/ui/Spinner";

import { useRoute } from "@/hooks/map/useRoute";
import { useBookmarks } from "@/hooks/places/useBookmarks";
import { useSelectedPlace } from "@/hooks/places/useSelectedPlace";
import { usePlacesFetch } from "@/hooks/search/usePlacesFetch";

import { isPlaceBookmarked } from "@/utils/bookmarks/isPlaceBookmarked";

export function SearchResults() {
  const { searchPlaces, isLoading, onBack } = usePlacesFetch();
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
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <BackButton onBack={onBack} />

          {searchPlaces?.map((place) => {
            const { place_id } = place.properties;
            const isBookmarked = isPlaceBookmarked(bookmarks, place.properties);
            const bookmarkPlace = () =>
              onBookmarkClick({
                isBookmarked,
                properties: place.properties,
              });
            const setNewPlace = () => updatePlace(place.properties);

            return (
              <PlaceCard
                key={place_id}
                onBookmarkClick={bookmarkPlace}
                onArrowClick={setNewPlace}
                isBookmarked={isBookmarked}
                {...place.properties}
              />
            );
          })}
        </>
      )}
    </Sidebar.PageWrapper>
  );
}
