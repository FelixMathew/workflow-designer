import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import NodePanel from "./components/NodePanel";
import SimulationPanel from "./components/SimulationPanel";


function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative", // needed for simulation panel overlay
      }}
    >
      {/* 🔹 Sidebar */}
      <Sidebar />

      {/* 🔹 Canvas */}
      <div style={{ flex: 1 }}>
        <Canvas />
      </div>

      {/* 🔹 Node Edit Panel */}
      <NodePanel />

      {/* 🔹 Simulation Panel (floating) */}
      <SimulationPanel />


    </div>
  );
}

export default App;