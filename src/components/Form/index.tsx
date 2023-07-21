import cn from "classnames";
import { HTMLAttributes, PropsWithChildren, memo } from "react";

import { FormCategorySelect } from "@/components/Form/FormCategorySelect";
import { FormInput } from "@/components/Form/FormInput";
import { FormSubmit } from "@/components/Form/FormSubmit";

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
      className={cn("flex flex-col gap-4 w-full", {
        "h-full": fullHeight,
      })}
    >
      {children}
    </form>
  );
});

export const Form = Object.assign(MemoizedForm, {
  Input: FormInput,
  Submit: FormSubmit,
  CategorySelect: FormCategorySelect,
});
