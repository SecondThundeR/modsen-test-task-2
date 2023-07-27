import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useDatabase } from "@/hooks/firebase/useDatabase";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { PlacesProperties } from "@/schemas/geoapify";

import {
  appendBookmark,
  removeBookmark,
  setBookmarks,
} from "@/store/bookmarks";

export function useBookmarks() {
  const { fetchData, updateData, removeData } = useDatabase();
  const { bookmarks } = useAppSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const fetchBookmarks = useCallback(async () => {
    const data = await fetchData({
      path: "bookmarks",
      isArray: true,
    });
    if (!data) return;

    dispatch(setBookmarks(data));
  }, [dispatch, fetchData]);

  const addBookmark = useCallback(
    async (properties: PlacesProperties) => {
      const {
        name,
        address_line2,
        categories,
        lat,
        lon,
        place_id,
        datasource,
      } = properties;

      const bookmark = {
        name: name ?? "",
        address_line2,
        lat,
        lon,
        datasource,
      };

      await updateData({
        path: "bookmarks",
        key: place_id,
        data: { ...bookmark, categories: categories.join(",") },
      });
      dispatch(appendBookmark({ [place_id]: { ...bookmark, categories } }));
    },
    [dispatch, updateData],
  );

  const deleteBookmark = useCallback(
    async (bookmarkID: string) => {
      await removeData({
        path: "bookmarks",
        key: bookmarkID,
      });
      dispatch(removeBookmark(bookmarkID));
    },
    [dispatch, removeData],
  );

  const onBookmarkClick = useCallback(
    async (options: {
      isBookmarked?: boolean;
      properties?: PlacesProperties | null;
    }) => {
      const { isBookmarked, properties } = options;
      if (!properties) return;

      isBookmarked
        ? await deleteBookmark(properties.place_id)
        : await addBookmark(properties);
    },
    [addBookmark, deleteBookmark],
  );

  useEffect(() => {
    if (!bookmarks) return;

    fetchBookmarks();
  }, []);

  return { bookmarks, onBookmarkClick };
}
