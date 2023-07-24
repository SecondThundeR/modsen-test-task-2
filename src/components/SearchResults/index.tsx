import { BackButton } from "@/components/BackButton";
import { PlaceCard } from "@/components/PlaceCard";
import { PlaceDetails } from "@/components/PlaceDetails";
import { Sidebar } from "@/components/Sidebar";
import { Spinner } from "@/components/Spinner";

import { useBookmarks } from "@/hooks/places/useBookmarks";
import { useSelectedPlace } from "@/hooks/places/useSelectedPlace";
import { usePlacesFetch } from "@/hooks/search/usePlacesFetch";

import { isPlaceBookmarked } from "@/utils/bookmarks/isPlaceBookmarked";

export function SearchResults() {
  const { searchPlaces, isLoading, onBack } = usePlacesFetch();
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
      ) : isLoading ? (
        <Spinner />
      ) : (
        <>
          <BackButton onBack={onBack} />

          {searchPlaces?.map((place) => {
            const { place_id } = place.properties;
            const isBookmarked = isPlaceBookmarked(bookmarks, place.properties);

            return (
              <PlaceCard
                key={place_id}
                onBookmarkClick={() =>
                  onBookmarkClick({
                    isBookmarked,
                    properties: place.properties,
                  })
                }
                onArrowClick={() => updatePlace(place.properties)}
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
