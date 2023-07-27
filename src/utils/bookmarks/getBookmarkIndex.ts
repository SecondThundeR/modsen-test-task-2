import { PlacesProperties } from "@/schemas/geoapify";

import { BookmarksState } from "@/store/bookmarks";

export function getBookmarkIndex(
  bookmarks: NonNullable<BookmarksState["bookmarks"]>,
  place_id: PlacesProperties["place_id"],
) {
  return bookmarks.findIndex(
    (bookmark) => Object.keys(bookmark)[0] === place_id,
  );
}
