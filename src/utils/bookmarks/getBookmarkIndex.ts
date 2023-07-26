import { PlacesProperties } from "@/schemas/geoapify";

import { Bookmark } from "@/store/bookmarks";

export function getBookmarkIndex(
  bookmarks: Bookmark[],
  place_id: PlacesProperties["place_id"],
) {
  return bookmarks.findIndex(
    (bookmark) => Object.keys(bookmark)[0] === place_id,
  );
}
