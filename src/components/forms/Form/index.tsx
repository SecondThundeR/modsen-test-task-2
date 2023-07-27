import cn from "classnames";
import { HTMLAttributes, PropsWithChildren, memo } from "react";

import { CategorySelect } from "@/components/forms/CategorySelect";
import { Input } from "@/components/forms/Input";
import { Submit } from "@/components/forms/Submit";

interface FormProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  fullHeight?: boolean;
}

const MemoizedForm = memo(function Form({
  children,
  fullHeight = false,
  onSubmit,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex w-full flex-col gap-4", {
        "h-full": fullHeight,
      })}
    >
      {children}
    </form>
  );
});

export const Form = Object.assign(MemoizedForm, {
  Input,
  Submit,
  CategorySelect,
});
