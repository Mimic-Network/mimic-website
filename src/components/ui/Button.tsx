import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = props => {
  return <section className={twMerge("px-8 py-3 bg-black text-white rounded-full", props.className)}>{props.children}</section>;
};
export default Button;
