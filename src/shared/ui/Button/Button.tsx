import cls from "./Button.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
import { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={classNames(cls.Button, {}, [])} {...restProps}>
      {children}
    </button>
  );
};
