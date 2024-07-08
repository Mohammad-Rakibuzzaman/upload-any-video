// import React from "react";
// import "./App.css";
// import "./index.css";
// import VideoUpload from "./components/VideoUpload";
// import FlowDiagram from "./components/FlowDiagram";

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="bg-blue-600 text-white p-4 text-center text-3xl">
//         Upload Any APP
//       </header>
//       <main className="p-4">
//         <div className="App">
//           <h1 className="text-4xl font-bold mb-4">Video Upload</h1>
//           <VideoUpload />{" "}
//         </div>
//         <FlowDiagram />
//       </main>
//     </div>
//   );
// };

// export default App;

import React from "react";
import VideoUpload from "./components/VideoUpload";
import FlowDiagram from "./components/FlowDiagram";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold mb-4">Video Upload</h1>
      <VideoUpload />
      <FlowDiagram />
    </div>
  );
};

export default App;
