import { createBrowserRouter } from "react-router-dom";

import { Bookmarks } from "@/components/Bookmarks";
import { Home } from "@/components/Home";
import { Login } from "@/components/Login";
import { Search } from "@/components/Search";
import { Signup } from "@/components/Signup";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

import { ROUTES } from "@/constants/router/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.search,
        element: <Search />,
      },
      {
        path: ROUTES.bookmarks,
        element: <Bookmarks />,
      },
    ],
  },
  {
    path: ROUTES.signup,
    element: <Signup />,
  },
  {
    path: ROUTES.login,
    element: <Login />,
  },
]);
