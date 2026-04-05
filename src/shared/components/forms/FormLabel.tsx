import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = (props: Props) => {
  const { children, className } = props;

  return (
    <label {...props} className={clsx("block", className)}>
      {children}
    </label>
  );
};
