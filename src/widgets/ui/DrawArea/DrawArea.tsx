import styles from "./DrawArea.module.scss";
import { fabric } from "fabric";
import { useCallback, useContext, useEffect } from "react";
import { Canvas } from "fabric/fabric-impl";
import { CanvasContext } from "app/Providers/CanvasProvider";

export const DrawArea = () => {
  const {
    canvasSizes: { width, height },
    canvas,
  } = useContext(CanvasContext);
  const loadImage = useCallback(() => {
    const initedCanvas = canvas.current;
    const group: any[] = [];
    fabric.loadSVGFromURL(
      `http://fabricjs.com/assets/2.svg`,
      (objects, options) => {
        const loadedObject = new fabric.Group(group);

        initedCanvas.add?.(loadedObject);
        initedCanvas.requestRenderAll();
      },
      (item: any, object: any) => {
        object.set("id", item.getAttribute("id"));
        group.push(object);
      },
    );
  }, [canvas]);

  useEffect(() => {
    if (!canvas.current.backgroundColor) return;
    const initedCanvas: Canvas = canvas.current;
    initedCanvas?.setDimensions?.({ width: width, height: height });
    loadImage();
  }, [width, height]);

  return (
    <>
      <canvas id="canvas" ref={canvas} className={styles.drawArea} />
      <button onClick={() => loadImage()}>ТЕТСЫФТВ</button>
    </>
  );
};
