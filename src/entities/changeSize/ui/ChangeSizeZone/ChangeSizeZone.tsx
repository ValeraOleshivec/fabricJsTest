import { Input } from "shared/ui/Input/Input";
import { useContext } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";

interface changeSIzeZoneProps {
  className?: string;
}

export const ChangeSizeZone = ({ className }: changeSIzeZoneProps) => {
  const { setCanvasSizes } = useContext(CanvasContext);
  const handleChangeSize =
    (type: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setCanvasSizes((prev) => {
        return { ...prev, [type]: Number(e.target.value) };
      });
    };

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
