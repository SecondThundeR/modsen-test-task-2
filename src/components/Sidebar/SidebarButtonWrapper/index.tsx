import { PropsWithChildren, memo } from "react";

export const SidebarButtonWrapper = memo(function SidebarButtonWrapper({
  children,
}: PropsWithChildren) {
  return <div className="flex flex-grow flex-col gap-2">{children}</div>;
});
