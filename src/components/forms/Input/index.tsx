import { InputHTMLAttributes, PropsWithChildren, memo } from "react";

interface InputProps
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
      | "value"
    > {}

export const Input = memo(function FormInput(props: InputProps) {
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
