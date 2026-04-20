import { create } from "zustand";
import type { Node, Edge } from "reactflow";

type WorkflowState = {
  nodes: Node[];
  edges: Edge[];
  selectedNode: Node | null;

  // setters
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;

  // actions
  addNode: (type: string) => void;
  setSelectedNode: (node: Node | null) => void;
  updateNodeData: (id: string, data: any) => void;
  deleteNode: (id: string) => void;
};

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  // 🔹 Initial state
  nodes: [
    {
      id: "1",
      type: "start",
      position: { x: 250, y: 150 },
      data: { label: "Start Node" },
    },
  ],
  edges: [],
  selectedNode: null,

  // 🔹 Setters
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),

  // 🔹 Add Node (with validation)
  addNode: (type) => {
    const { nodes } = get();

    // ❗ Prevent multiple Start nodes
    if (type === "start") {
      const hasStart = nodes.some((n) => n.type === "start");
      if (hasStart) {
        alert("❌ Only one Start node allowed");
        return;
      }
    }

    const newNode: Node = {
      id: Date.now().toString(),
      type,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 400,
      },
      data: {
        label: `${type.toUpperCase()} Node`,
      },
    };

    set({
      nodes: [...nodes, newNode],
    });
  },

  // 🔹 Select Node
  setSelectedNode: (node) => set({ selectedNode: node }),

  // 🔹 Update Node Data
  updateNodeData: (id, newData) => {
    const updatedNodes = get().nodes.map((node) =>
      node.id === id
        ? {
            ...node,
            data: {
              ...node.data,
              ...newData,
            },
          }
        : node
    );

    set({ nodes: updatedNodes });
  },

  // 🔥 Delete Node (with edge cleanup)
  deleteNode: (id) => {
    const { nodes, edges } = get();

    const updatedNodes = nodes.filter((n) => n.id !== id);

    const updatedEdges = edges.filter(
      (e) => e.source !== id && e.target !== id
    );

    set({
      nodes: updatedNodes,
      edges: updatedEdges,
      selectedNode: null,
    });
  },
}));