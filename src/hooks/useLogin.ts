import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes";

import { auth } from "@/services/firebase";

export function useLogin(email: string, password: string) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => navigate(ROUTES.home))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    },
    [email, password, navigate, setIsLoading]
  );

  return { isLoading, onSubmit };
}
