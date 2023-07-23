import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { auth } from "@/services/firebase/app";

export function useLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      setIsLoading(true);

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate(ROUTES.home);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, setError, setIsLoading],
  );

  return { isLoading, error, onSubmit };
}
