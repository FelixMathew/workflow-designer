import { useWorkflowStore } from "../store/workflowStore";
import { exportWorkflow, importWorkflow } from "../utils/workflowUtils";

export default function Sidebar() {
  const {
    addNode,
    nodes,
    edges,
    setNodes,
    setEdges,
  } = useWorkflowStore();

  const btnStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        width: 240,
        padding: 20,
        background: "#111827",
        color: "white",
        borderRight: "1px solid #333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // 👈 pushes profile to bottom
        height: "100vh",
      }}
    >
      {/* 🔹 TOP SECTION */}
      <div>
        <h2 style={{ marginBottom: 20 }}>Workflow</h2>

        {/* Add Nodes */}
        <button
          style={{ ...btnStyle, background: "#10B981" }}
          onClick={() => addNode("start")}
        >
          + Start
        </button>

        <button
          style={{ ...btnStyle, background: "#3B82F6" }}
          onClick={() => addNode("task")}
        >
          + Task
        </button>

        <button
          style={{ ...btnStyle, background: "#F59E0B" }}
          onClick={() => addNode("approval")}
        >
          + Approval
        </button>

        <button
          style={{ ...btnStyle, background: "#EF4444" }}
          onClick={() => addNode("end")}
        >
          + End
        </button>

        {/* Divider */}
        <hr style={{ margin: "20px 0", borderColor: "#333" }} />

        {/* Save */}
        <button
          style={{ ...btnStyle, background: "#6366F1" }}
          onClick={() => exportWorkflow(nodes, edges)}
        >
          💾 Save JSON
        </button>

        {/* Load */}
        <input
          type="file"
          accept="application/json"
          style={{ marginTop: 10 }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              importWorkflow(file, setNodes, setEdges);
            }
          }}
        />
      </div>

      {/* 🔹 BOTTOM PROFILE CARD */}
      <div
        style={{
          marginTop: 20,
          padding: 15,
          background: "#1F2937",
          borderRadius: 10,
          textAlign: "center",
          border: "1px solid #333",
        }}
      >
        {/* Profile Image */}
        <img
          src="https://github.com/FelixMathew.png" // 👈 auto GitHub avatar
          alt="profile"
          style={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: 10,
            border: "2px solid #555",
          }}
        />

        {/* Name */}
        <div style={{ fontWeight: "bold", fontSize: 16 }}>
          Felix Mathew
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 12,
            color: "#9CA3AF",
            marginBottom: 10,
          }}
        >
          AI & Fullstack Developer
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            fontSize: 18,
          }}
        >
          <a href="mailto:felixsparrow561@gmail.com">📧</a>

          <a href="https://github.com/FelixMathew" target="_blank">
            🐙
          </a>

          <a
            href="https://www.linkedin.com/in/felixmathew07/"
            target="_blank"
          >
            🔗
          </a>

          <a
            href="https://felixmathew.github.io/my-portfolio/"
            target="_blank"
          >
            🌐
          </a>
        </div>
      </div>
    </div>
  );
}