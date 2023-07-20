import { PropsWithChildren, memo } from "react";

export const SidebarButtonWrapper = memo(function SidebarButtonWrapper({
  children,
}: PropsWithChildren) {
  return <div className="flex flex-col flex-grow gap-2">{children}</div>;
});
