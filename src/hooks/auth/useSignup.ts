import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/router/routes";

import { auth, database } from "@/services/firebase/app";

export function useSignup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const displayName = formData.get("displayName") as string;

      try {
        const credentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const { user } = credentials;

        await updateProfile(user, {
          displayName,
        });

        await set(ref(database, "users/" + user.uid), {
          username: displayName,
        });

        navigate(ROUTES.home);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate],
  );

  return { isLoading, error, onSubmit };
}
