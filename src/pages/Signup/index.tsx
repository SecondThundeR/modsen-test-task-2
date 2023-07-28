import { Link } from "react-router-dom";

import { Form } from "@/components/forms/Form";
import { AlertError } from "@/components/ui/AlertError";
import { AuthContainer } from "@/components/ui/AuthContainer";
import { Heading } from "@/components/ui/Heading";

import { ROUTES } from "@/constants/routes";

import { useSignup } from "@/hooks/auth/useSignup";

export function Signup() {
  const { isLoading, error, onSubmit } = useSignup();

  return (
    <AuthContainer>
      <Heading>Signup</Heading>
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
    </AuthContainer>
  );
}
