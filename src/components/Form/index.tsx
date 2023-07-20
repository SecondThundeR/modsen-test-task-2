import { HTMLAttributes, PropsWithChildren, memo } from "react";

import { FormInput } from "@/components/Form/FormInput";
import { FormSubmit } from "@/components/Form/FormSubmit";

interface FormProps
  extends PropsWithChildren,
    Pick<HTMLAttributes<HTMLFormElement>, "onSubmit"> {}

const MemoizedForm = memo(function Form({ children, onSubmit }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      {children}
    </form>
  );
});

export const Form = Object.assign(MemoizedForm, {
  Input: FormInput,
  Submit: FormSubmit,
});
