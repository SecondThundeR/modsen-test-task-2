import { PropsWithChildren, memo } from "react";

import { SidebarButton } from "@/components/Sidebar/SidebarButton";
import { SidebarButtonWrapper } from "@/components/Sidebar/SidebarButtonWrapper";

const MemoizedSidebar = memo(function Sidebar({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-col items-center gap-4 px-2 py-4">
      {children}
    </div>
  );
});

export const Sidebar = Object.assign(MemoizedSidebar, {
  Button: SidebarButton,
  ButtonWrapper: SidebarButtonWrapper,
});
