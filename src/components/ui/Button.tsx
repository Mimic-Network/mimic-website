import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "px-8 py-3 bg-black cursor-pointer text-white rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
