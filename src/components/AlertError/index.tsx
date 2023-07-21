import { memo } from "react";

import { ReactComponent as XCircleIcon } from "@/assets/xCircle.svg";

interface AlertErrorProps {
  error: Error | null;
}

export const AlertError = memo(function AlertError({ error }: AlertErrorProps) {
  return (
    error && (
      <div className="alert alert-error">
        <XCircleIcon />
        <span>{error.message}</span>
      </div>
    )
  );
});
