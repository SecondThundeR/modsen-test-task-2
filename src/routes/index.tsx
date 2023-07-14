import { createBrowserRouter } from "react-router-dom";

import { Home } from "../components/Home";
import { Signup } from "../components/Signup";
import { Login } from "../components/Login";

import { ROUTES } from "../constants/routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
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
