import cn from "classnames";
import { HTMLAttributes, PropsWithChildren, memo } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import { Button } from "@/components/ui/Button";

interface SidebarButtonProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLButtonElement>, "onClick">,
    Partial<Pick<NavLinkProps, "to">> {
  unstyled?: boolean;
}

export const SidebarButton = memo(function SidebarButton({
  to,
  children,
  onClick,
  unstyled = false,
}: SidebarButtonProps) {
  if (!to)
    return (
      <Button className="btn-outline" onClick={onClick}>
        {children}
      </Button>
    );

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        !unstyled
          ? cn("btn btn-primary", {
              "btn-outline": !isActive,
            })
          : ""
      }
    >
      {children}
    </NavLink>
  );
});
