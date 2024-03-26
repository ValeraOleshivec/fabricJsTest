import cls from "./Modal.module.scss";
import { useContext, useEffect, useRef } from "react";
import { CanvasContext } from "app/Providers/CanvasProvider";

const Modal = () => {
  const { canvas, openModal, setOpenModal } = useContext(CanvasContext);
  const ref = useRef(null);
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenModal(false);
      }
    };
    if (openModal) {
      document.addEventListener("click", handleClose);
    }
    return () => document.removeEventListener("click", handleClose);
  }, [openModal]);
  if (!openModal) return null;
  return (
    <div className={cls.modalContainer}>
      <div className={cls.modal} ref={ref}>
        <p>{canvas.current.toSVG()}</p>
      </div>
    </div>
  );
};

export default Modal;
