import { Link } from "react-router-dom";

import { AlertError } from "@/components/AlertError";
import { Form } from "@/components/Form";

import { ROUTES } from "@/constants/router/routes";

import { useLogin } from "@/hooks/auth/useLogin";

export const Login = () => {
  const { isLoading, error, onSubmit } = useLogin();

  return (
    <div className="flex flex-col gap-4 w-full px-4 sm:w-1/2 lg:w-2/6 h-screen mx-auto items-center justify-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <AlertError error={error} />
      <Form onSubmit={onSubmit}>
        <Form.Input
          id="email"
          name="email"
          type="email"
          children="Email address"
          placeholder="Enter email address"
          required
        />
        <Form.Input
          id="password"
          name="password"
          type="password"
          children="Password"
          placeholder="Enter password"
          required
        />
        <Form.Submit isLoading={isLoading} children="Login" />
      </Form>
      <p>
        No account yet?{" "}
        <Link to={ROUTES.signup} className="link link-primary">
          Signup
        </Link>
      </p>
      <p>
        <Link to={ROUTES.home} className="link link-primary">
          Go home
        </Link>
      </p>
    </div>
  );
};
