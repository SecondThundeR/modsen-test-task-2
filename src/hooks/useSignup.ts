import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { ROUTES } from "../constants/routes";

import { auth } from "../services/firebase";

export function useSignup(email: string, password: string) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate(ROUTES.home))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    },
    [email, password, navigate, setIsLoading]
  );

  return { isLoading, onSubmit };
}
