import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { auth } from "@/services/firebase/app";

import { resetUser, setUser } from "@/store/user";

export function useAuthUser() {
  const [isFetching, setIsFetching] = useState(true);
  const { userData } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsFetching(true);
      if (!user) {
        setIsFetching(false);
        dispatch(resetUser());
        return;
      }
      const { uid, displayName } = user;
      dispatch(setUser({ uid, displayName }));
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return { userData, isFetching, handleLogout };
}
