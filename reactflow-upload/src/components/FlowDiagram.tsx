import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  Node,
  Edge,
} from "react-flow-renderer";

type FlowElements = (Node | Edge)[];

const initialElements: FlowElements = [
  {
    id: "1",
    type: "input",
    data: { label: "Upload Video" },
    position: { x: 250, y: 0 },
  },
];

const FlowDiagram: React.FC = () => {
  const [elements, setElements] = useState<FlowElements>(initialElements);

  const onConnect = (params: any) => setElements((els) => addEdge(params, els));

  return (
    <div className="h-screen">
      <ReactFlow elements={elements} onConnect={onConnect}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
