import { useState, useEffect, useCallback } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../../services/firebase";
import { Link } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
    // <div>
    //   <h1>Hi!</h1>
    //   <pre>{JSON.stringify(user, null, 4)}</pre>
    //   {user ? (
    //     <button className="btn btn-accent" onClick={handleLogout}>
    //       Logout
    //     </button>
    //   ) : (
    //     <div className="flex gap-2">
    //       <Link className="btn btn-accent" to="/login">
    //         Login
    //       </Link>
    //       <Link className="btn btn-accent" to="/signup">
    //         Sign Up
    //       </Link>
    //     </div>
    //   )}
    // </div>
  );
};
