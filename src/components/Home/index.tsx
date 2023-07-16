import { useEffect, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { Map } from "@/components/Map";

import { resetUser, setUser } from "@/features/user/userSlice";

import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";

import { auth } from "@/services/firebase";

export const Home = () => {
  const user = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return dispatch(resetUser());
      const { uid, email, displayName } = user;
      dispatch(setUser({ uid, email, displayName }));
    });
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="w-1/6 flex flex-col p-4 drop-shadow-2xl z-10 fixed top-0 left-0 bg-base-200 h-full">
        <h1 className="text-2xl font-bold">Hello there!</h1>
        <p className="py-6 flex-grow">
          {user
            ? `You are currently logged in as "${user.displayName}"`
            : "To continue, please login or signup"}
        </p>
        {user ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-primary flex-grow">
              Login
            </Link>
            <Link to="/signup" className="btn btn-accent flex-grow">
              Signup
            </Link>
          </div>
        )}
      </header>
      <Map />
    </div>
  );
};
