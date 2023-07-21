import { InputHTMLAttributes, PropsWithChildren, memo } from "react";

interface FormInputProps
  extends PropsWithChildren,
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      | "id"
      | "name"
      | "type"
      | "placeholder"
      | "required"
      | "min"
      | "max"
      | "defaultValue"
    > {}

export const FormInput = memo(function FormInput(props: FormInputProps) {
  const { children, ...inputProps } = props;

  return (
    <div className="form-control w-full">
      {children && (
        <label className="label" htmlFor={inputProps.id}>
          <span className="label-text">{children}</span>
        </label>
      )}
      <input className="input input-bordered w-full" {...inputProps} />
    </div>
  );
});
