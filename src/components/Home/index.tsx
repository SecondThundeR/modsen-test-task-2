import { useEffect, useCallback } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { resetUser, setUser } from "../../features/user/userSlice";
import { useAppSelector } from "../../hooks/redux/useAppSelector";
import { useAppDispatch } from "../../hooks/redux/useAppDispatch";
import { auth } from "../../services/firebase";

export const Home = () => {
  const user = useAppSelector((state) => state.user.userData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      dispatch(user ? setUser(user) : resetUser())
    );
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch(console.error);
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">
            {user ? (
              <p>You are currently logged in as "{user.email}"</p>
            ) : (
              <p>To continue, please login or signup</p>
            )}
          </p>
          {user ? (
            <button className="btn btn-primary" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <div className="flex gap-2 justify-center">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-accent">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
