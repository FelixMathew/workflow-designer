export const exportWorkflow = (nodes: any[], edges: any[]) => {
  if (!nodes || nodes.length === 0) {
    alert("No workflow to save!");
    return;
  }

  const data = { nodes, edges };
  const json = JSON.stringify(data, null, 2);

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "workflow.json";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const importWorkflow = (
  file: File,
  setNodes: (n: any[]) => void,
  setEdges: (e: any[]) => void
) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const text = event.target?.result as string;
      const data = JSON.parse(text);

      if (!Array.isArray(data.nodes) || !Array.isArray(data.edges)) {
        alert("Invalid JSON structure");
        return;
      }

      setNodes(data.nodes);
      setEdges(data.edges);
      alert("Workflow loaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Error loading JSON");
    }
  };

  reader.readAsText(file);
};