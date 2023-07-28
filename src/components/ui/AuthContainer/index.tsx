import { PropsWithChildren, memo } from "react";

export const AuthContainer = memo(function AuthContainer({
  children,
}: PropsWithChildren) {
  return (
    <div className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-4 px-4 sm:w-1/2 lg:w-2/6">
      {children}
    </div>
  );
});
