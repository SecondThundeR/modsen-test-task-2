import { Link } from "react-router-dom";

import { AlertError } from "@/components/AlertError";

import { ROUTES } from "@/constants/routes";

import { useLogin } from "@/hooks/useLogin";

export const Login = () => {
  const { isLoading, error, onSubmit } = useLogin();

  return (
    <div className="flex flex-col gap-4 m-4">
      <h1 className="text-2xl text-bold">Login</h1>
      <AlertError error={error} />
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
            required
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
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-fit"
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner"></span>}
          Login
        </button>
      </form>

      <p className="text-base">
        No account yet?{" "}
        <Link to={ROUTES.signup} className="link link-accent">
          Signup
        </Link>
      </p>
    </div>
  );
};
