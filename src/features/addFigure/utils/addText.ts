import { fabric } from "fabric";
import { TEXT } from "../const";
import { Canvas } from "fabric/fabric-impl";

export const handleAddText = (canvas: Canvas, text: string) => {
  const textBox = new fabric.Textbox(text, {
    ...TEXT,
  });
  canvas.add(textBox);
  canvas.renderAll();
};
