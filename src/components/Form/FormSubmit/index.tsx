import { PropsWithChildren, memo } from "react";

import { Spinner } from "@/components/Spinner";

interface FormSubmitProps extends PropsWithChildren {
  isLoading: boolean;
}

export const FormSubmit = memo(function FormSubmit({
  children,
  isLoading,
}: FormSubmitProps) {
  return (
    <button type="submit" className="btn btn-primary" disabled={isLoading}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
});
