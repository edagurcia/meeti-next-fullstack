import { FormHTMLAttributes } from "react";
import clsx from "clsx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export const Form = (props: Props) => {
  const { children, className } = props;
  return (
    <form {...props} className={clsx("mt-10 space-y-3", className)}>
      {children}
    </form>
  );
};
