import { fabric } from "fabric";
import { RECTANGLE } from "../const";
import { Canvas } from "fabric/fabric-impl";

export const handleAddRectangle = (canvas: Canvas) => {
  const rectangle = new fabric.Rect({
    ...RECTANGLE,
  });
  canvas.add(rectangle);
  canvas.renderAll();
};
