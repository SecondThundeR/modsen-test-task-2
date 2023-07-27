import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

import { ROUTES } from "@/constants/routes";

import { Bookmarks } from "@/pages/Bookmarks";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Search } from "@/pages/Search";
import { Signup } from "@/pages/Signup";

export const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path={ROUTES.home} element={<Home />}>
            <Route path={ROUTES.search} element={<Search />} />
            <Route path={ROUTES.bookmarks} element={<Bookmarks />} />
          </Route>
          <Route path={ROUTES.signup} element={<Signup />} />
          <Route path={ROUTES.login} element={<Login />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};
