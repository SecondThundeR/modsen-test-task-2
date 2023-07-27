import { PropsWithChildren, memo } from "react";

import { Spinner } from "@/components/ui/Spinner";

export const Submit = memo(function FormSubmit({
  children,
  isLoading = false,
}: PropsWithChildren<{ isLoading?: boolean }>) {
  return (
    <button type="submit" className="btn btn-primary" disabled={isLoading}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
});
