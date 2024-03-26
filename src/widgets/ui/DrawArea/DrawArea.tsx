import styles from "./DrawArea.module.scss";
import { useContext, useEffect } from "react";
import { Canvas } from "fabric/fabric-impl";
import { CanvasContext } from "app/Providers/CanvasProvider";

export const DrawArea = () => {
  const {
    canvasSizes: { width, height },
    canvas,
  } = useContext(CanvasContext);

  useEffect(() => {
    if (!canvas.current?.backgroundColor) return;
    const initedCanvas: Canvas = canvas.current;
    initedCanvas?.setDimensions?.({ width: width, height: height });
  }, [width, height]);

  return <canvas id="canvas" ref={canvas} className={styles.drawArea} />;
};
