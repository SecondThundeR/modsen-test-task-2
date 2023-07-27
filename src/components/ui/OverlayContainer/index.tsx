import { PropsWithChildren, memo } from "react";

export const OverlayContainer = memo(function OverlayContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-full bg-base-200 drop-shadow-2xl">
      {children}
    </div>
  );
});
