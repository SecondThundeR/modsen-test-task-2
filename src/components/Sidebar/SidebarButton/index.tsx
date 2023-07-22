import cn from "classnames";
import { HTMLAttributes, PropsWithChildren, memo } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const BUTTON_STYLES = "btn btn-primary";

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
      <button className={cn(BUTTON_STYLES, "btn-outline")} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        !unstyled
          ? cn(BUTTON_STYLES, {
              "btn-outline": !isActive,
            })
          : ""
      }
    >
      {children}
    </NavLink>
  );
});
