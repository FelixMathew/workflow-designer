import { Handle, Position } from "reactflow";

export default function StartNode({ data }: any) {
  return (
    <div
      style={{
        padding: "12px 20px",
        borderRadius: "10px",
        background: "#10B981",
        color: "white",
        fontWeight: "600",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      🚀 {data.label || "Start"}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}