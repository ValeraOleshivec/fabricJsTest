import cls from "./AddCustomImage.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
import { Input } from "shared/ui/Input";
import { useContext, useState } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "app/Providers/CanvasProvider";
interface AddCustomImageProps {
  className?: string;
}

export const AddCustomImage = ({ className }: AddCustomImageProps) => {
  const { canvas } = useContext(CanvasContext);
  const handleLoadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileType = e.target.files[0].type.split("/")[1];
    const url = URL.createObjectURL(e.target.files[0]);
    if (["jpg", "jpeg", "png"].includes(fileType)) {
      fabric.Image.fromURL(url, (img) => {
        img.set({}).scale(0.2);
        canvas.current.add(img);
      });
    }
  };
  return (
    <div className={classNames(cls.AddCustomImage, {}, [])}>
      <p>Загрузите своё изображение в формате JPG,PNG</p>
      <Input type={"file"} onChange={handleLoadImage} />
    </div>
  );
};
