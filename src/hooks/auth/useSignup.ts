import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { auth } from "@/services/firebase/app";

export function useSignup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const displayName = formData.get("displayName") as string;

      createUserWithEmailAndPassword(auth, email, password)
        .then((credentials) =>
          updateProfile(credentials.user, {
            displayName,
          }),
        )
        .then(() => navigate(ROUTES.home))
        .catch(setError)
        .finally(() => setIsLoading(false));
    },
    [navigate, setError, setIsLoading],
  );

  return { isLoading, error, onSubmit };
}
