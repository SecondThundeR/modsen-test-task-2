import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as BookmarkIcon } from "@/assets/bookmark.svg";
import { ReactComponent as HideIcon } from "@/assets/hide.svg";
import { ReactComponent as LoginIcon } from "@/assets/login.svg";
import { ReactComponent as LogoIcon } from "@/assets/logo.svg";
import { ReactComponent as LogoutIcon } from "@/assets/logout.svg";
import { ReactComponent as SearchIcon } from "@/assets/search.svg";
import { ReactComponent as ShowIcon } from "@/assets/show.svg";

import { Map } from "@/components/map";
import { AvatarIcon } from "@/components/ui/AvatarIcon";
import { HiddenContainer } from "@/components/ui/HiddenContainer";
import { OverlayContainer } from "@/components/ui/OverlayContainer";
import { Sidebar } from "@/components/ui/Sidebar";
import { Spinner } from "@/components/ui/Spinner";

import { ROUTES } from "@/constants/routes";

import { useAuthUser } from "@/hooks/auth/useAuthUser";
import { useReset } from "@/hooks/map/useReset";

export function Home() {
  const [isHidden, setIsHidden] = useState(false);
  const { userData, isFetching, handleLogout } = useAuthUser();

  useReset();

  const hideElements = () => {
    setIsHidden((prev) => !prev);
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
            {userData && (
              <Sidebar.Button to={ROUTES.bookmarks}>
                <BookmarkIcon />
              </Sidebar.Button>
            )}
          </Sidebar.ButtonWrapper>
          <Sidebar.Button onClick={hideElements}>
            {isHidden ? <ShowIcon /> : <HideIcon />}
          </Sidebar.Button>
          {isFetching && <Spinner />}
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
        <HiddenContainer isHidden={isHidden}>
          <Outlet />
        </HiddenContainer>
      </OverlayContainer>
      <Map />
    </div>
  );
}
