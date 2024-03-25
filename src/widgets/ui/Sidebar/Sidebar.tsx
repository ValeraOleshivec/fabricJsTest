import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames/classNames";
import { ChangeSizeZone } from "entities/changeSize/ui/ChangeSizeZone/ChangeSizeZone";
import { AddSvg } from "features/addFigure/ui/AddSVG/AddSvg";
import { AddDefaultFigures } from "features/addFigure/ui/AddDefaultFigures/AddDefaultFigures";
import { AddCustomImage } from "features/addFigure/ui/AddCustomImage/AddCustomImage";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
      <ChangeSizeZone className={cls.changeSizeZone} />
      <AddSvg className={cls.addSvgZone} />
      <AddDefaultFigures />
      <AddCustomImage />
    </div>
  );
};
