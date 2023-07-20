import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Home } from "@/components/Home";
import { Login } from "@/components/Login";
import { Signup } from "@/components/Signup";

import { ROUTES } from "@/constants/router/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
    errorElement: <ErrorBoundary />,
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
