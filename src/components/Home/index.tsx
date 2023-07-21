import cn from "classnames";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as HideIcon } from "@/assets/hide.svg";
import { ReactComponent as LoginIcon } from "@/assets/login.svg";
import { ReactComponent as LogoIcon } from "@/assets/logo.svg";
import { ReactComponent as LogoutIcon } from "@/assets/logout.svg";
import { ReactComponent as SearchIcon } from "@/assets/searchIcon.svg";
import { ReactComponent as ShowIcon } from "@/assets/show.svg";

import { AvatarIcon } from "@/components/AvatarIcon";
import { Map } from "@/components/Map";
import { OverlayContainer } from "@/components/OverlayContainer";
import { Sidebar } from "@/components/Sidebar";

import { ROUTES } from "@/constants/router/routes";

import { useAppDispatch } from "@/hooks/redux/useAppDispatch";
import { useAppSelector } from "@/hooks/redux/useAppSelector";

import { auth } from "@/services/firebase/app";
import { getLocationPlaces } from "@/services/geoapify/getLocationPlaces";

import { setPlaces } from "@/store/places";
import { resetUser, setUser } from "@/store/user";

export const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { userData } = useAppSelector((state) => state.user);
  const {
    locationCoordinates: { lat, lng },
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
    getLocationPlaces(lat, lng)
      .then((places) => dispatch(setPlaces(places)))
      .catch(console.error);
  }, [dispatch, lat, lng]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch(console.error);
  };

  return (
    <div className="min-h-screen">
      <OverlayContainer>
        <Sidebar>
          <Sidebar.Button to={ROUTES.home} unstyled>
            <LogoIcon />
          </Sidebar.Button>
          <Sidebar.ButtonWrapper>
            <Sidebar.Button to={ROUTES.search}>
              <SearchIcon />
            </Sidebar.Button>
            <Sidebar.Button to={ROUTES.bookmarks}>
              <BookmarkIcon />
            </Sidebar.Button>
          </Sidebar.ButtonWrapper>
          <Sidebar.Button
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            {isHidden ? <ShowIcon /> : <HideIcon />}
          </Sidebar.Button>
          {userData ? (
            <>
              <AvatarIcon displayName={userData.displayName} />
              <Sidebar.Button onClick={handleLogout}>
                <LogoutIcon />
              </Sidebar.Button>
            </>
          ) : (
            <Sidebar.Button to={ROUTES.login}>
              <LoginIcon />
            </Sidebar.Button>
          )}
        </Sidebar>
        <div
          className={cn({
            hidden: isHidden,
          })}
        >
          <Outlet />
        </div>
      </OverlayContainer>
      <Map />
    </div>
  );
};
