import { child, get, ref, update } from "firebase/database";
import { useCallback } from "react";

import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { database } from "@/services/firebase/app";

interface BaseOptions {
  path: string;
}

interface FetchDataOptions extends BaseOptions {
  isArray?: boolean;
}

interface UpdateDataOptions extends BaseOptions {
  key: string;
  data: any;
}

interface RemoveDataOptions extends BaseOptions {
  key: string;
}

export function useDatabase() {
  const userID = useAppSelector((state) => state.user.userData?.uid);

  const userDBRef = userID ? ref(database, "users/" + userID) : null;

  const fetchData = useCallback(
    async (options: FetchDataOptions) => {
      if (!userDBRef) return null;

      const { path, isArray = false } = options;

      try {
        const snapshot = await get(child(userDBRef, path));
        if (!snapshot.exists()) return null;

        const data = snapshot.exportVal();
        return isArray ? [data] : data;
      } catch (error) {
        console.error(error);
      }

      return null;
    },
    [userDBRef],
  );

  const updateData = useCallback(
    async (options: UpdateDataOptions) => {
      if (!userDBRef) return;

      const { path, key, data } = options;

      try {
        await update(child(userDBRef, path), {
          [key]: data,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [userDBRef],
  );

  const removeData = useCallback(async (options: RemoveDataOptions) => {
    if (!userDBRef) return;

    const { path, key } = options;

    try {
      await update(child(userDBRef, path), {
        [key]: null,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { fetchData, updateData, removeData };
}
