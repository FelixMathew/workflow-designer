export const simulateWorkflow = async (
  nodes: any[],
  edges: any[],
  setActiveNode: (id: string | null) => void
): Promise<string[]> => {
  // ❌ No nodes
  if (!nodes || nodes.length === 0) {
    return ["❌ No nodes found"];
  }

  // 🔍 Find Start nodes
  const startNodes = nodes.filter((n) => n.type === "start");

  if (startNodes.length === 0) {
    return ["❌ No Start Node found"];
  }

  if (startNodes.length > 1) {
    return ["❌ Multiple Start Nodes found"];
  }

  const startNode = startNodes[0];

  const result: string[] = [];
  let current = startNode;

  const visited = new Set<string>();

  while (current) {
    // ⚠️ Cycle detection
    if (visited.has(current.id)) {
      result.push("⚠️ Cycle detected in workflow");
      break;
    }

    visited.add(current.id);

    // 🔥 Highlight node
    setActiveNode(current.id);

    // ✅ Add step to result
    result.push(`➡ ${current.data?.label || current.type}`);

    // ⏳ Delay for animation
    await new Promise((res) => setTimeout(res, 800));

    // 🔗 Find next edge
    const nextEdge = edges.find((e) => e.source === current.id);

    if (!nextEdge) {
      result.push("🏁 Workflow completed");
      break;
    }

    // 🔍 Find next node
    const nextNode = nodes.find((n) => n.id === nextEdge.target);

    if (!nextNode) {
      result.push("❌ Broken connection detected");
      break;
    }

    current = nextNode;
  }

  // 🔄 Reset highlight
  setActiveNode(null);

  return result;
};