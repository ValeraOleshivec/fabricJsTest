import cls from "./Input.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
import { InputProps } from "./types";

export const Input = ({
  className,
  onChange,
  value,
  ...restProps
}: InputProps) => {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <input
      {...restProps}
      onChange={handleChange}
      className={classNames(cls.Input, {}, [className])}
    />
  );
};
