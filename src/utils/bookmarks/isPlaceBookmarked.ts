import { PlacesProperties } from "@/schemas/geoapify";

import { Bookmark } from "@/store/bookmarks";

import { getBookmarkIndex } from "./getBookmarkIndex";

export function isPlaceBookmarked(
  bookmarks: Bookmark[],
  placeProperties?: PlacesProperties | null,
) {
  if (!placeProperties) return false;
  return getBookmarkIndex(bookmarks, placeProperties.place_id) !== -1;
}
