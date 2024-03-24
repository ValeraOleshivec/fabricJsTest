import cls from "./Input.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
interface InputProps {
  className?: string;
}

export const Input = ({ className }: InputProps) => {
  return <div className={classNames(cls.Input, {}, [])}></div>;
};
