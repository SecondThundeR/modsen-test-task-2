import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { auth } from "@/services/firebase/app";

export function useLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate(ROUTES.home))
        .catch(setError)
        .finally(() => setIsLoading(false));
    },
    [navigate, setError, setIsLoading],
  );

  return { isLoading, error, onSubmit };
}
