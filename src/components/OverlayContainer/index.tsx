import { PropsWithChildren, memo } from "react";

export const OverlayContainer = memo(function OverlayContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex drop-shadow-2xl z-10 fixed top-0 left-0 h-full bg-base-200">
      {children}
    </div>
  );
});
