import { Handle, Position } from "reactflow";

export default function TaskNode({ data }: any) {
  return (
    <div style={{
      padding: "12px 20px",
      borderRadius: "10px",
      background: "#3B82F6",
      color: "white",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}>
      📋 {data.label || "Task"}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}