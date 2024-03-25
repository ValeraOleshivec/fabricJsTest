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
    fabric.loadSVGFromURL(url, (objects, options) => {
      const svg = fabric.util.groupSVGElements(objects, options);
      svg.hasControls = true;
      svg.selectable = true;
      canvas.current.add(svg);
      canvas.current.renderAll();
      svg.setCoords();
    });
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
