import { Link } from "react-router-dom";

import { Form } from "@/components/forms/Form";
import { AlertError } from "@/components/ui/AlertError";
import { AuthContainer } from "@/components/ui/AuthContainer";
import { Heading } from "@/components/ui/Heading";

import { ROUTES } from "@/constants/routes";

import { useLogin } from "@/hooks/auth/useLogin";

export function Login() {
  const { isLoading, error, onSubmit } = useLogin();

  return (
    <AuthContainer>
      <Heading>Login</Heading>
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
    </AuthContainer>
  );
}
