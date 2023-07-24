import { child, get, ref, update } from "firebase/database";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { PlacesPropeties } from "@/schemas/geoapify";

import { database } from "@/services/firebase/app";

import {
  appendBookmark,
  removeBookmark,
  setBookmarks,
} from "@/store/bookmarks";

export function useBookmarks() {
  const userID = useAppSelector((state) => state.user.userData?.uid);
  const { bookmarks } = useAppSelector((state) => state.bookmarks);
  const dispatch = useDispatch();

  const userDBRef = userID ? ref(database, "users/" + userID) : null;

  const fetchBookmarks = useCallback(async () => {
    if (!userDBRef || bookmarks !== null) return;

    try {
      const snapshot = await get(child(userDBRef, "bookmarks"));
      if (snapshot.exists()) {
        dispatch(setBookmarks([snapshot.exportVal()]));
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, userDBRef]);

  const addBookmark = useCallback(
    async (properties: PlacesPropeties) => {
      if (!userDBRef) return;

      const {
        name,
        address_line2: address,
        categories,
        lat,
        lon,
        place_id,
      } = properties;

      try {
        const bookmark = {
          name: name ?? "",
          address,
          categories: categories.join(","),
          lat,
          lon,
        };
        await update(child(userDBRef, "bookmarks"), {
          [place_id]: bookmark,
        });
        dispatch(appendBookmark({ [place_id]: bookmark }));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, userDBRef],
  );

  const deleteBookmark = useCallback(
    async (bookmarkID: string) => {
      if (!userDBRef) return;

      try {
        await update(child(userDBRef, "bookmarks"), {
          [bookmarkID]: null,
        });
        dispatch(removeBookmark(bookmarkID));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, userDBRef],
  );

  useEffect(() => {
    if (!userID) return;

    fetchBookmarks();
  }, []);

  return { bookmarks, addBookmark, deleteBookmark };
}
