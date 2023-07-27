import { memo } from "react";

import { ReactComponent as XCircleIcon } from "@/assets/xCircle.svg";

import { extractDetailsMessage } from "@/utils/error/extractDetailsMessage";

interface AlertErrorProps {
  error: unknown;
}

export const AlertError = memo(function AlertError({ error }: AlertErrorProps) {
  if (!error) return null;

  return (
    <div className="alert alert-error">
      <XCircleIcon />
      <span className="text-base font-medium">
        {extractDetailsMessage(error)}
      </span>
    </div>
  );
});
