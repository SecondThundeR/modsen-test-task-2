import { PropsWithChildren, memo } from "react";

export const Subheading = memo(function Subheading({
  children,
}: PropsWithChildren) {
  return <p className="opacity-70">{children}</p>;
});
