import { fabric } from "fabric";
import { CIRCLE } from "../const";
import { Canvas } from "fabric/fabric-impl";

export const handleAddCircle = (canvas: Canvas) => {
  const circle = new fabric.Circle({
    ...CIRCLE,
  });
  canvas.add(circle);
  canvas.renderAll();
};
