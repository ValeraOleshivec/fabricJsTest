import './App.scss';
import CanvasProvider from "./Providers/CanvasProvider";
import Sidebar from "../widgets/ui/Sidebar/Sidebar";
import DrawArea from "../widgets/ui/DrawArea/DrawArea";

function App() {


  return (
      <CanvasProvider>
          <Sidebar/>
          <DrawArea/>
      </CanvasProvider>
  );
}

export default App;
