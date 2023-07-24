import { PlacesProperties } from "@/schemas/geoapify";

import { Bookmark } from "@/store/bookmarks";

export function isPlaceBookmarked(
  bookmarks: Bookmark[],
  placeProperties?: PlacesProperties | null,
) {
  if (!placeProperties) return false;
  return (
    bookmarks.findIndex(
      (bookmark) => Object.keys(bookmark)[0] === placeProperties?.place_id,
    ) !== -1
  );
}
