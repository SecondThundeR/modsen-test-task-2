import { useRouteError } from "react-router-dom";

import { extractDetailsMessage } from "@/utils/error/extractDetailsMessage";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-2xl font-bold">Something wrong happened!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p className="italic opacity-70">
        Details: {extractDetailsMessage(error)}
      </p>
    </div>
  );
}
