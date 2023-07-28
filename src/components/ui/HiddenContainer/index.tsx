import cn from "classnames";
import { PropsWithChildren, memo } from "react";

interface HiddenContainerProps extends PropsWithChildren {
  isHidden: boolean;
}

export const HiddenContainer = memo(function HiddenContainer({
  children,
  isHidden,
}: HiddenContainerProps) {
  return (
    <div
      className={cn({
        hidden: isHidden,
      })}
    >
      {children}
    </div>
  );
});
