import { PropsWithChildren, memo } from "react";

export const AlertSuccess = memo(function AlertSuccess({
  children,
}: PropsWithChildren) {
  return (
    <div className="alert alert-success">
      <span className="text-base font-medium">{children}</span>
    </div>
  );
});
