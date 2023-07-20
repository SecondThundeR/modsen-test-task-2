import { Link } from "react-router-dom";

import { AlertError } from "@/components/AlertError";
import { Form } from "@/components/Form";

import { ROUTES } from "@/constants/routes";

import { useLogin } from "@/hooks/useLogin";

export const Login = () => {
  const { isLoading, error, onSubmit } = useLogin();

  return (
    <div className="flex flex-col gap-4 m-4">
      <h1 className="text-2xl text-bold">Login</h1>
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
        <Link to={ROUTES.signup} className="link link-accent">
          Signup
        </Link>
      </p>
    </div>
  );
};
