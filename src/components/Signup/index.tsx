import { useState } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { useSignup } from "../../hooks/useSignup";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, onSubmit } = useSignup(email, password);

  return (
    <div className="flex flex-col gap-4 m-4">
      <h1 className="text-2xl text-bold">Signup</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="email">
            <span className="label-text">Email address</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-fit"
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          Sign up
        </button>
      </form>

      <p className="text-base">
        Already have an account?{" "}
        <Link to={ROUTES.login} className="link link-accent">
          Login
        </Link>
      </p>
    </div>
  );
};
