import { PropsWithChildren, memo } from "react";

export const Heading = memo(function Heading({ children }: PropsWithChildren) {
  return <h1 className="text-xl font-bold">{children}</h1>;
});
