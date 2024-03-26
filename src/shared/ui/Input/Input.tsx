import cls from "./Input.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
import { InputProps } from "./types";
import { ChangeEvent } from "react";

export const Input = ({
  className,
  onChange,
  value,
  ...restProps
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <input
      {...restProps}
      onChange={handleChange}
      className={classNames(cls.Input, {}, [className])}
    />
  );
};
