import cn from "classnames";
import { PropsWithChildren, memo } from "react";

interface ToastProps extends PropsWithChildren {
  start?: boolean;
  end?: boolean;
  top?: boolean;
  bottom?: boolean;
}

export const Toast = memo(function Toast({
  children,
  start = true,
  end = false,
  top = true,
  bottom = false,
}: ToastProps) {
  return (
    <div
      className={cn("toast", {
        "toast-start": start,
        "toast-end": end,
        "toast-top": top,
        "toast-bottom": bottom,
      })}
    >
      {children}
    </div>
  );
});
