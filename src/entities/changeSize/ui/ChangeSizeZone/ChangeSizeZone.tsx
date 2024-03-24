import { Input } from "shared/ui/Input/Input";
import { useContext } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";

interface changeSIzeZoneProps {
  className?: string;
}

export const ChangeSizeZone = ({ className }: changeSIzeZoneProps) => {
  const { canvasSizes, setCanvasSizes } = useContext(CanvasContext);
  const handleChangeSize = (type: any) => (value: any) => {
    setCanvasSizes((prev: any) => {
      return { ...prev, [type]: Number(value) };
    });
  };
  console.log(canvasSizes);

  return (
    <div className={className}>
      <Input
        onChange={handleChangeSize("width")}
        placeholder={"Введите ширину экрана"}
      />
      <Input
        onChange={handleChangeSize("height")}
        placeholder={"Введите высоту экрана"}
      />
    </div>
  );
};
