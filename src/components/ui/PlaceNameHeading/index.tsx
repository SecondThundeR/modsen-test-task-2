import { PropsWithChildren, memo } from "react";

export const PlaceNameHeading = memo(function PlaceNameHeading({
  children,
}: PropsWithChildren) {
  return <h1 className="line-clamp-2 text-2xl font-bold">{children}</h1>;
});
