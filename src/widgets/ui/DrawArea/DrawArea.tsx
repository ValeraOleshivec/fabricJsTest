import styles from "./DrawArea.module.scss";
import { fabric } from "fabric";
import { useCallback, useContext, useEffect, useState } from "react";
import { Canvas } from "fabric/fabric-impl";
import { CanvasContext } from "app/Providers/CanvasProvider";

export const DrawArea = () => {
  const {
    canvasSizes: { width, height },
    canvas,
  } = useContext(CanvasContext);
  const [selectedObjects, setSelectedObject] = useState<fabric.Object[]>([]);

  useEffect(() => {
    const initedCanvas = canvas.current;
    if (!initedCanvas.backgroundColor) return;
    const bindEvents = (canvas: fabric.Canvas) => {
      initedCanvas.on("selection:cleared", () => {
        setSelectedObject([]);
      });
      initedCanvas.on("selection:created", (e: any) => {
        console.log(e);
        setSelectedObject(e.selected);
      });
      initedCanvas.on("selection:updated", (e: any) => {
        console.log(e);
        setSelectedObject(e.selected);
      });
    };
    if (initedCanvas) {
      bindEvents(initedCanvas);
    }
  }, [canvas]);

  useEffect(() => {
    if (!canvas.current.add?.()) return;
    const initedCanvas: Canvas = canvas.current;
    initedCanvas?.setDimensions?.({ width: width, height: height });
  }, [width, height]);

  return <canvas id="canvas" ref={canvas} className={styles.drawArea} />;
};
