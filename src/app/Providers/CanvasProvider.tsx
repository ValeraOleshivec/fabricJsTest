import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Canvas } from "fabric/fabric-impl";
import { fabric } from "fabric";
const initialState = {
  canvasSizes: {
    width: window.innerWidth - 400,
    height: window.innerHeight,
  },
};

export const CanvasContext = createContext<any>(null);

const CanvasProvider = ({ children }: { children: ReactNode }) => {
  const [canvasSizes, setCanvasSizes] = useState({
    width: window.innerWidth - 400,
    height: window.innerHeight,
  });
  const canvas = useRef<any>(null);
  const initCanvas = (): Canvas =>
    new fabric.Canvas("canvas", {
      backgroundColor: "pink",
      width: canvasSizes.width,
      height: canvasSizes.height,
    });
  useEffect(() => {
    canvas.current = initCanvas();
    // return () => canvas.current.dispose();
  }, []);

  const returnValue = useMemo(
    () => ({
      canvasSizes,
      setCanvasSizes,
      canvas,
    }),
    [canvasSizes, setCanvasSizes, canvas],
  );
  //TODO добавить типы

  return (
    // @ts-ignore
    <CanvasContext.Provider value={returnValue}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
