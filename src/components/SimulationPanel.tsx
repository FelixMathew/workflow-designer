import { useState } from "react";
import { useWorkflowStore } from "../store/workflowStore";
import { simulateWorkflow } from "../utils/simulateWorkflow";

export default function SimulationPanel() {
  const { nodes, edges, setActiveNode } = useWorkflowStore();
  const [logs, setLogs] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  const runSimulation = async () => {
    if (running) return; // prevent double click

    setRunning(true);
    setLogs([]);

    const result = await simulateWorkflow(
      nodes,
      edges,
      setActiveNode
    );

    setLogs(result);
    setRunning(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 320,
        background: "#111827",
        color: "white",
        padding: 15,
        borderRadius: 10,
        boxShadow: "0 5px 20px rgba(0,0,0,0.4)",
        border: "1px solid #333",
      }}
    >
      {/* Run Button */}
      <button
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          background: running ? "#555" : "#22C55E",
          border: "none",
          borderRadius: 6,
          fontWeight: "bold",
          cursor: running ? "not-allowed" : "pointer",
        }}
        onClick={runSimulation}
      >
        {running ? "Running..." : "▶ Run Workflow"}
      </button>

      {/* Logs */}
      <div
        style={{
          fontSize: 14,
          maxHeight: 150,
          overflowY: "auto",
          paddingRight: 5,
        }}
      >
        {logs.length === 0 ? (
          <div style={{ color: "#9CA3AF" }}>
            No simulation yet...
          </div>
        ) : (
          logs.map((log, i) => (
            <div key={i} style={{ marginBottom: 4 }}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
}