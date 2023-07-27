import { PropsWithChildren, memo } from "react";

import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";

export const Submit = memo(function FormSubmit({
  children,
  isLoading = false,
}: PropsWithChildren<{ isLoading?: boolean }>) {
  return (
    <Button type="submit" className="btn btn-primary" disabled={isLoading}>
      {isLoading && <Spinner />}
      {children}
    </Button>
  );
});
