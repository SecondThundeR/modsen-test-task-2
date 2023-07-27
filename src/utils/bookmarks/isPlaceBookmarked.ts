import { PlacesProperties } from "@/schemas/geoapify";

import { BookmarksState } from "@/store/bookmarks";

import { getBookmarkIndex } from "./getBookmarkIndex";

export function isPlaceBookmarked(
  bookmarks: BookmarksState["bookmarks"],
  placeProperties?: PlacesProperties | null,
) {
  if (!bookmarks || !placeProperties) return false;
  return getBookmarkIndex(bookmarks, placeProperties.place_id) !== -1;
}
