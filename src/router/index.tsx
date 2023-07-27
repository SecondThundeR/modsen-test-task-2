import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Bookmarks } from "@/components/Bookmarks";
import { Login } from "@/components/Login";
import { Search } from "@/components/Search";
import { Signup } from "@/components/Signup";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

import { ROUTES } from "@/constants/router/routes";

import { Home } from "@/pages/Home";

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
