import { Link } from "react-router-dom";

import { Form } from "@/components/forms/Form";
import { AlertError } from "@/components/ui/AlertError";

import { ROUTES } from "@/constants/router/routes";

import { useLogin } from "@/hooks/auth/useLogin";

export function Login() {
  const { isLoading, error, onSubmit } = useLogin();

  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-4 px-4 sm:w-1/2 lg:w-2/6">
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
        <Link to={ROUTES.signup} className="link-primary link">
          Signup
        </Link>
      </p>
      <p>
        <Link to={ROUTES.home} className="link-primary link">
          Go home
        </Link>
      </p>
    </div>
  );
}
