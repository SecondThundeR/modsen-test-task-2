import { child, get, ref, update } from "firebase/database";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { database } from "@/services/firebase/app";

import {
  Bookmark,
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
    if (!userDBRef) return;

    try {
      const snapshot = await get(child(userDBRef, "bookmarks"));
      if (snapshot.exists()) {
        dispatch(setBookmarks(snapshot.val()));
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, userDBRef]);

  const addBookmark = useCallback(
    async (bookmark: Bookmark) => {
      if (!userDBRef) return;

      try {
        const placeID = Object.keys(bookmark)[0];
        await update(child(userDBRef, "bookmarks"), {
          [placeID]: bookmark,
        });
        dispatch(appendBookmark(bookmark));
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
  }, [fetchBookmarks, userID]);

  return { bookmarks, addBookmark, deleteBookmark };
}
