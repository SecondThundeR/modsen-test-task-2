import { Bookmark } from "@/store/bookmarks";

export function extractProperties(bookmark: Bookmark) {
  const place_id = Object.keys(bookmark)[0];
  return { ...bookmark[place_id], place_id };
}
