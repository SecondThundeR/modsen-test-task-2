import { PropsWithChildren, memo } from "react";

import { SidebarButton } from "@/components/ui/Sidebar/Button";
import { SidebarButtonWrapper } from "@/components/ui/Sidebar/ButtonWrapper";
import { SidebarPageWrapper } from "@/components/ui/Sidebar/PageWrapper";

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
  PageWrapper: SidebarPageWrapper,
});
