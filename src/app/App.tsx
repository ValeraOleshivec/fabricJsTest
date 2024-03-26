import "./App.scss";
import CanvasProvider from "./Providers/CanvasProvider";
import { Sidebar } from "widgets/ui/Sidebar";
import { DrawArea } from "widgets/ui/DrawArea";
import Modal from "entities/Modal/Modal";

function App() {
  return (
    <CanvasProvider>
      <Modal />
      <Sidebar />
      <DrawArea />
    </CanvasProvider>
  );
}

export default App;
