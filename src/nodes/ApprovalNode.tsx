import { Handle, Position } from "reactflow";

export default function ApprovalNode({ data }: any) {
  return (
    <div style={{
      padding: "12px 20px",
      borderRadius: "10px",
      background: "#F59E0B",
      color: "white",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
    }}>
      ✅ {data.label || "Approval"}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}