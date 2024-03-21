import {createContext, ReactNode, useMemo, useState} from "react";
const initialState = {
    canvasSizes:{
        width:window.innerWidth - 400,
        height:window.innerHeight
    }
}
export const CanvasContext = createContext(initialState)

const CanvasProvider = ({children}:{children:ReactNode}) => {
    const [canvasSizes, setCanvasSizes] = useState({
        width:window.innerWidth - 400,
        height:window.innerHeight
    })

    const returnValue = useMemo( ()=>({
        canvasSizes,
        setCanvasSizes
    }),[])
//TODO добавить типы

    return (
        // @ts-ignore
        <CanvasContext.Provider value={returnValue}>
            {children}
        </CanvasContext.Provider>
    );
};

export default CanvasProvider;
