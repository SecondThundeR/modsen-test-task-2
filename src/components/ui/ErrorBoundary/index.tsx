import React, { PropsWithChildren } from "react";

import { Heading } from "@/components/ui/Heading";
import { Subheading } from "@/components/ui/Subheading";

import { extractDetailsMessage } from "@/utils/error/extractDetailsMessage";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div className="flex h-screen flex-col items-center justify-center gap-2">
          <Heading>Something wrong happened!</Heading>
          <p>Sorry, an unexpected error has occurred</p>
          <Subheading>Details: {extractDetailsMessage(error)}</Subheading>
        </div>
      );
    }

    return this.props.children;
  }
}
