import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { Map } from "@/components/Map";

import { ROUTES } from "@/constants/routes";

import { setPlaces } from "@/features/places/placesSlice";
import { resetUser, setUser } from "@/features/user/userSlice";

import { useAppSelector } from "@/hooks/redux/useAppSelector";
import { useAppDispatch } from "@/hooks/redux/useAppDispatch";

import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";
import { auth } from "@/services/firebase";

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
