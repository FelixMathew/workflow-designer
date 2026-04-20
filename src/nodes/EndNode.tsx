import { Handle, Position } from "reactflow";

export default function EndNode({ data }: any) {
  return (
    <div style={{
      padding: "12px 20px",
      borderRadius: "10px",
      background: "#EF4444",
      color: "white",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}>
      🛑 {data.label || "End"}

      <Handle type="target" position={Position.Top} />
    </div>
  );
}