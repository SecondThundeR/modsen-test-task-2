import { Bookmark } from "@/store/bookmarks";

export function convertDatabaseBookmarks(data: any[]) {
  return data.map((bookmark) => {
    const placeID = Object.keys(bookmark)[0];
    const { categories, ...rest } = bookmark[placeID];

    return {
      [placeID]: {
        ...rest,
        categories: categories.split(","),
      },
    } as Bookmark;
  });
}
