import cn from "classnames";
import { ButtonHTMLAttributes, PropsWithChildren, memo } from "react";

interface ButtonProps
  extends Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "onClick" | "disabled" | "className" | "type"
    >,
    PropsWithChildren {
  isAccent?: boolean;
  classNames?: string;
}

export const Button = memo(function Button({
  type,
  className,
  onClick,
  disabled,
  children,
  isAccent,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("btn", className, {
        "btn-primary": !isAccent,
        "btn-accent": isAccent,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
