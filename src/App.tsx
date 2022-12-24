import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { ReactFlowProvider } from "reactflow";
import "./index.css"

import Flow from "./components/Nodes/components/Flow";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="h-screen">
      {loading ? (
        <div className="flex justify-center items-center m-auto w-screen h-screen">
          <PuffLoader color="#c9302c" size={100} />

        </div>
      ) : (
        <ReactFlowProvider>
          <Flow />
        </ReactFlowProvider>
      )}
    </div>
  );
}

export default App;
