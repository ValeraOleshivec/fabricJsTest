import { useCallback, useContext, useEffect, useMemo } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";
import { fabric } from "fabric";
import { Canvas } from "fabric/fabric-impl";

interface AddSvgProps {
  className?: string;
}
const defaultSvgCount = 15;

export const AddSvg = ({ className }: AddSvgProps) => {
  const { canvas } = useContext(CanvasContext);

  const handleAddSvgFigure = useCallback((url: string) => {
    const initedCanvas: Canvas = canvas.current;
    fabric.loadSVGFromURL(url, (objects, options) => {
      console.log(options);
      const svg = fabric.util.groupSVGElements(objects, options);
      svg.hasControls = true;
      svg.selectable = true;
      canvas.current.add(svg);
      canvas.current.renderAll();
      initedCanvas.on("mouse:down", () => console.log("нажал"));
      svg.setCoords();
    });
  }, []);
  useEffect(() => {
    fabric.loadSVGFromURL(
      "http://fabricjs.com/assets/2.svg",
      (objects, options) => {
        const svg = fabric.util.groupSVGElements(objects, options);
        canvas.current.add(svg);
        canvas.current.renderAll();
      },
    );
  }, []);
  return (
    <div className={className}>
      {Array.from(Array(15)).map((arg: undefined, index: number) => {
        const url = `http://fabricjs.com/assets/${index + 1}.svg`;
        return (
          <img
            key={url}
            style={{ width: "80px", height: "80px" }}
            src={url}
            alt={"не прогрузилась svg"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddSvgFigure(url);
            }}
          />
        );
      })}
    </div>
  );
};
