import { PropsWithChildren, memo } from "react";

export const SidebarPageWrapper = memo(function SidebarPageWrapper({
  children,
}: PropsWithChildren) {
  return (
    <div className="flex h-full w-80 flex-col items-center gap-3 overflow-auto bg-base-300 p-4">
      {children}
    </div>
  );
});
