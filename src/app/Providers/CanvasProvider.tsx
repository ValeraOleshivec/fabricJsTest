import React, {
  createContext,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas } from "fabric/fabric-impl";
import { fabric } from "fabric";
type canvasSizes = {
  width: number;
  height: number;
};
interface ContextValue {
  openModal: boolean;
  canvasSizes: canvasSizes;
  canvas: any;
  setCanvasSizes: React.Dispatch<React.SetStateAction<canvasSizes>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CanvasContext = createContext<ContextValue | null>(null);

const CanvasProvider = ({ children }: { children: ReactNode }) => {
  const [canvasSizes, setCanvasSizes] = useState<canvasSizes>({
    width: window.innerWidth - 400,
    height: window.innerHeight,
  });
  const [openModal, setOpenModal] = useState<boolean>(false);
  const canvas = useRef<any>(null);

  const initCanvas = (): Canvas =>
    new fabric.Canvas("canvas", {
      preserveObjectStacking: true,
      backgroundColor: "pink",
      width: canvasSizes.width,
      height: canvasSizes.height,
    });
  useLayoutEffect(() => {
    canvas.current = initCanvas();
  }, []);

  const returnValue = useMemo(
    () => ({
      openModal,
      setOpenModal,
      canvasSizes,
      setCanvasSizes,
      canvas,
    }),
    [canvasSizes, setCanvasSizes, canvas, openModal, setOpenModal],
  );

  return (
    <CanvasContext.Provider value={returnValue}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
