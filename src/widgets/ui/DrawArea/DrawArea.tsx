import styles from './DrawArea.module.scss'
import { fabric } from "fabric";
import {useContext, useEffect, useRef} from "react";
import {Canvas} from "fabric/fabric-impl";
import {CanvasContext} from "../../../app/Providers/CanvasProvider";

const DrawArea = () => {
    const {canvasSizes} = useContext(CanvasContext)
    const canvas = useRef<any>(null)
    const initCanvas = () :Canvas=> (
        new fabric.Canvas('canvas',{
            backgroundColor:'pink',
            ...canvasSizes
        })
    )
    // canvas.current.add

    useEffect(() => {
        canvas.current = initCanvas()
        const initedCanvas:Canvas = canvas.current
        // initedCanvas.add(new fabric.Text())
    }, []);
    return (
        <canvas id='canvas' ref={canvas}  className={styles.drawArea}/>
    );
};

export default DrawArea;
