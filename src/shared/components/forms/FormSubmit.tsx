import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const FormSubmit = (props: Props) => {
  const { className } = props;

  return (
    <input
      {...props}
      type="submit"
      value={props.value}
      className={clsx(
        "bg-pink-600 w-full p-2 uppercase font-black text-white mt-5",
        className,
      )}
    />
  );
};
