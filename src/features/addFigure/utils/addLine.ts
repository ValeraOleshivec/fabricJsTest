import { fabric } from "fabric";
import { LINE } from "../const";
import { Canvas } from "fabric/fabric-impl";

export const handleAddLine = (canvas: Canvas) => {
  const line = new fabric.Line(LINE.points, {
    ...LINE.options,
  });
  canvas.add(line);
  canvas.renderAll();
};
