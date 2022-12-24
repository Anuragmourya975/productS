// import React, { useState, useEffect } from "react";
// // import TimelineComponent from "./Components/TimelineComponent";
// import Flow from "../Nodes/Flow";
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";
// import { PuffLoader } from "react-spinners";
// import CircleLoader from "react-spinners/CircleLoader";
// import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// import { ReactFlowProvider } from "reactflow";

// const Application = () => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);
//   return (
//     <div>
//        {loading ? (
//         <div className="flex justify-center items-center m-auto w-screen h-screen">
//           <PuffLoader color="#c9302c" size={100} />
//           {/* <ClimbingBoxLoader color="#c9302c" /> */}
//           {/* <CircleLoader color="#c9302c" size={100} /> */}
//         </div>
//       ) : (
//         <ReactFlowProvider>
//           <Flow />
//         </ReactFlowProvider>
//       )}
//     </div>
//   );
// };

// export default Application;
