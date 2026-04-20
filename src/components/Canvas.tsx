import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

import type {
  Connection,
  NodeChange,
  EdgeChange,
} from "reactflow";

import "reactflow/dist/style.css";

// 🔹 Custom Nodes
import StartNode from "../nodes/StartNode";
import TaskNode from "../nodes/TaskNode";
import ApprovalNode from "../nodes/ApprovalNode";
import EndNode from "../nodes/EndNode";

// 🔹 Store
import { useWorkflowStore } from "../store/workflowStore";

// 🔹 Node types (IMPORTANT: outside component)
const nodeTypes = {
  start: StartNode,
  task: TaskNode,
  approval: ApprovalNode,
  end: EndNode,
};

function Flow() {
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    setSelectedNode,
    selectedNode,
    deleteNode,
  } = useWorkflowStore();

  // ✅ Handle dragging
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes]
  );

  // ✅ Handle edge updates
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges]
  );

  // ✅ Connect nodes
  const onConnect = useCallback(
    (params: Connection) => {
      setEdges(addEdge(params, edges));
    },
    [edges, setEdges]
  );

  // ✅ Select node
  const onNodeClick = (_: any, node: any) => {
    setSelectedNode(node);
  };

  // 🔥 Delete with keyboard
  const onKeyDown = (event: any) => {
    if (event.key === "Delete" && selectedNode) {
      deleteNode(selectedNode.id);
    }
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      onKeyDown={onKeyDown}
      tabIndex={0} // 🔥 REQUIRED for keyboard events
      fitView
    >
      <Background color="#444" gap={16} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default function Canvas() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}