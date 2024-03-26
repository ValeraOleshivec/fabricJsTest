import { Button } from "shared/ui/Button";
import { useContext, useEffect } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";
import cls from "./ManageMenu.module.scss";

export const ManageMenu = () => {
  const { canvas, setOpenModal } = useContext(CanvasContext);
  return (
    <div className={cls.menu}>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setOpenModal(true);
        }}
      >
        Save
      </Button>
    </div>
  );
};
