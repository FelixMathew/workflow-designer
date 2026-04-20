import { useWorkflowStore } from "../store/workflowStore";

export default function NodePanel() {
  const selectedNode = useWorkflowStore((s) => s.selectedNode);
  const updateNodeData = useWorkflowStore((s) => s.updateNodeData);
  const deleteNode = useWorkflowStore((s) => s.deleteNode);

  // ❌ No node selected
  if (!selectedNode) {
    return (
      <div
        style={{
          width: 260,
          padding: 20,
          background: "#111827",
          color: "#9CA3AF",
          borderLeft: "1px solid #333",
        }}
      >
        <h3>No Node Selected</h3>
        <p style={{ fontSize: 14 }}>
          Click a node to edit its properties
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: 260,
        padding: 20,
        background: "#111827",
        color: "white",
        borderLeft: "1px solid #333",
      }}
    >
      <h3 style={{ marginBottom: 10 }}>Edit Node</h3>

      {/* Node Type */}
      <div style={{ marginBottom: 10, fontSize: 14, color: "#9CA3AF" }}>
        Type: <b>{selectedNode.type?.toUpperCase()}</b>
      </div>

      {/* Label Input */}
      <label style={{ fontSize: 13 }}>Label</label>
      <input
        style={{
          width: "100%",
          padding: 8,
          marginTop: 5,
          borderRadius: 6,
          border: "none",
          outline: "none",
        }}
        value={selectedNode.data.label || ""}
        onChange={(e) =>
          updateNodeData(selectedNode.id, {
            label: e.target.value,
          })
        }
      />

      {/* Delete Button */}
      <button
        style={{
          marginTop: 20,
          width: "100%",
          padding: 10,
          background: "#EF4444",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={() => deleteNode(selectedNode.id)}
      >
        🗑 Delete Node
      </button>
    </div>
  );
}