import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Map } from "@/components/Map";

import { ROUTES } from "@/constants/router/routes";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { auth } from "@/services/firebase/app";
import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { setPlaces } from "@/store/places";
import { resetUser, setUser } from "@/store/user";

export const Home = () => {
  const { userData } = useAppSelector((state) => state.user);
  const {
    locationCoordinates: { lat, lng },
    locationRadius,
  } = useAppSelector((state) => state.location);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return dispatch(resetUser());
      const { uid, email, displayName } = user;
      dispatch(setUser({ uid, email, displayName }));
    });
  }, [dispatch]);

  useEffect(() => {
    getLocationPlaces(lat, lng, locationRadius)
      .then((places) => dispatch(setPlaces(places)))
      .catch(console.error);
  }, [dispatch, lat, lng, locationRadius]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen">
      <header className="w-1/6 flex flex-col p-4 drop-shadow-2xl z-10 fixed top-0 left-0 bg-base-200 h-full">
        <h1 className="text-2xl font-bold">Hello there!</h1>
        <p className="py-6 flex-grow">
          {userData
            ? `You are currently logged in as "${userData.displayName}"`
            : "To continue, please login or signup"}
        </p>
        {userData ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to={ROUTES.login} className="btn btn-primary flex-grow">
              Login
            </Link>
            <Link to={ROUTES.signup} className="btn btn-accent flex-grow">
              Signup
            </Link>
          </div>
        )}
      </header>
      <Map />
    </div>
  );
};
