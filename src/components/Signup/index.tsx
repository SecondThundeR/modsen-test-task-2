import { Link } from "react-router-dom";

import { AlertError } from "@/components/AlertError";
import { Form } from "@/components/Form";

import { ROUTES } from "@/constants/router/routes";

import { useSignup } from "@/hooks/auth/useSignup";

export const Signup = () => {
  const { isLoading, error, onSubmit } = useSignup();

  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-4 px-4 sm:w-1/2 lg:w-2/6">
      <h1 className="text-3xl font-bold">Signup</h1>
      <AlertError error={error} />
      <Form onSubmit={onSubmit}>
        <Form.Input
          id="displayName"
          name="displayName"
          type="text"
          children="Username"
          placeholder="Enter your username"
          required
        />
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
        <Form.Submit isLoading={isLoading} children="Signup" />
      </Form>
      <p>
        Already have an account?{" "}
        <Link to={ROUTES.login} className="link-primary link">
          Login
        </Link>
      </p>
      <p>
        <Link to={ROUTES.home} className="link-primary link">
          Go home
        </Link>
      </p>
    </div>
  );
};
