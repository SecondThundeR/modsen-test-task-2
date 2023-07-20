import { Link } from "react-router-dom";

import { AlertError } from "@/components/AlertError";
import { Form } from "@/components/Form";

import { ROUTES } from "@/constants/routes";

import { useSignup } from "@/hooks/useSignup";

export const Signup = () => {
  const { isLoading, error, onSubmit } = useSignup();

  return (
    <div className="flex flex-col gap-4 m-4">
      <h1 className="text-2xl text-bold">Signup</h1>
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
        <Link to={ROUTES.login} className="link link-accent">
          Login
        </Link>
      </p>
    </div>
  );
};
