import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { useContext, useEffect, useState } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";
import { handleAddRectangle } from "../../utils/addRectangle";
import { handleAddCircle } from "../../utils/addCircle";
import { handleAddLine } from "../../utils/addLine";
import { handleAddText } from "../../utils/addText";
import cls from "./AddDefaultFigures.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
interface AddDefaultFiguresProps {
  className?: string;
}

export const AddDefaultFigures = ({ className }: AddDefaultFiguresProps) => {
  const { canvas } = useContext(CanvasContext);
  const [text, setText] = useState<string>("");
  return (
    <div className={classNames(cls.defaultFigures, {}, [className])}>
      <Button onClick={() => handleAddRectangle(canvas.current)}>
        Добавить прямоугольник
      </Button>
      <Button onClick={() => handleAddCircle(canvas.current)}>
        Добавить круг
      </Button>
      <Button onClick={() => handleAddLine(canvas.current)}>
        Добавить линию
      </Button>
      <div className={cls.textInput}>
        <Input
          placeholder={"Введите текст для добавления"}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={() => handleAddText(canvas.current, text)}>
          Добавить текст
        </Button>
      </div>
    </div>
  );
};
