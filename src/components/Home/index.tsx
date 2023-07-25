import cn from "classnames";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as HideIcon } from "@/assets/hide.svg";
import { ReactComponent as LoginIcon } from "@/assets/login.svg";
import { ReactComponent as LogoIcon } from "@/assets/logo.svg";
import { ReactComponent as LogoutIcon } from "@/assets/logout.svg";
import { ReactComponent as SearchIcon } from "@/assets/search.svg";
import { ReactComponent as ShowIcon } from "@/assets/show.svg";

import { AvatarIcon } from "@/components/AvatarIcon";
import { Map } from "@/components/Map";
import { OverlayContainer } from "@/components/OverlayContainer";
import { Sidebar } from "@/components/Sidebar";
import { Spinner } from "@/components/Spinner";

import { ROUTES } from "@/constants/router/routes";

import { useAuthUser } from "@/hooks/auth/useAuthUser";
import { useReset } from "@/hooks/map/useReset";

export const Home = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { userData, isFetching, handleLogout } = useAuthUser();

  useReset();

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
            {userData && (
              <Sidebar.Button to={ROUTES.bookmarks}>
                <BookmarkIcon />
              </Sidebar.Button>
            )}
          </Sidebar.ButtonWrapper>
          <Sidebar.Button
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            {isHidden ? <ShowIcon /> : <HideIcon />}
          </Sidebar.Button>
          {isFetching ? (
            <Spinner />
          ) : userData ? (
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
