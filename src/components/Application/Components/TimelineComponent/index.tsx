// import Button from "@mui/material/Button";
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Timeline, TimelineModel } from "animation-timeline-js";
// import { gsap } from "gsap";
// // type Props = {
// //   time: number;
// //   model: TimelineModel;
// // };
// import "./style.css";

// function App() {
//   const [model, setModel] = useState(null);
//   const [time, setTime] = useState(0);
//   // const { model, time } = props;
//   const timelineElRef = useRef<HTMLDivElement>(null);
//   const [timeline, setTimeline] = useState<Timeline>();
//   const app = useRef();
//   const circle = useRef();

//   useLayoutEffect(() => {
//     gsap.to(".circle", { rotation: 27, x: 100, duration: 1 });
//   });

//   let rows = [
//     {
//       keyframes: [
//         {
//           val: 40,
//         },
//         // {
//         //   val: 30
//         // },
//         {
//           val: 1000,
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     let newTimeline: Timeline | null = null;
//     // On component init
//     if (timelineElRef.current) {
//       newTimeline = new Timeline({ id: timelineElRef.current });
//       // Here you can subscribe on timeline component events
//       setTimeline(newTimeline);
//     }

//     // cleanup on component unmounted.
//     return () => {
//       timeline?.dispose();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Example to subscribe and pass model or time update:
//   useEffect(() => {
//     if (timeline) {
//       timeline.setModel({ rows: rows });
//     }
//   }, [model, timeline]);

//   // Example to subscribe and pass model or time update:
//   useEffect(() => {
//     if (timeline) {
//       timeline.setTime(time);
//     }
//   }, [time, timeline]);

//   return (
//     <div>
//       {/* <div style={{border: '1px solid grey', width:"100%", height:'80px'}}  ref={timelineElRef} /> */}
//       <div
//         style={{
//           border: "1px solid grey",
//           width: "100%",
//           height: "50px",
//           textAlign: "center",
//           justifyContent: "center",
//           fontWeight: "bold",
//           color: "white",
//           backgroundColor: "black",
//         }}
//       >
//         Tool Bar
//       </div>
//       <div
//         style={{
//           border: "1px solid grey",
//           width: "20%",
//           height: "400px",
//           float: "left",
//           textAlign: "center",
//           justifyContent: "center",
//           fontWeight: "bold",
//           color: "white",
//           backgroundColor: "black",
//         }}
//       >
//         Project Library
//       </div>
//       <div
//         style={{
//           border: "1px solid grey",
//           width: "848px",
//           height: "400px",
//           float: "left",
//           textAlign: "center",
//           justifyContent: "center",
//           fontWeight: "bold",
//           color: "black",
//           backgroundColor: "white",
//         }}
//       >
//         <svg
//           height={400}
//           width={848}
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//         >
//           <circle className="circle" cx="180.88" cy="264.74" r="108" fill="red" stroke="blue"/>
//           <rect
//             x="374.43"
//             y="146.05"
//             className="circle"
//             width="226.69"
//             height="226.69"
//             fill="brown" stroke="blue"
//           />
//           <polygon
//             className="circle"
//             points="798.28,191.01 646.48,150.33 757.6,39.21 "
//             fill="green" stroke="blue"
//           />
//         </svg>
//       </div>
//       <div
//           style={{
//             border: "1px solid grey",
//             width: "225px",
//             height: "400px",
//             float: "right",
//             textAlign: "center",
//             justifyContent: "center",
//             fontWeight: "bold",
//             color: "white",
//             backgroundColor: "black",
//           }}
//         >
//           Properties
//         </div>
//       <div
//         style={{
//           border: "1px solid grey",
//           width: "100%",
//           height: "170px",
//           marginTop: "400px",
//         }}
//         ref={timelineElRef}
//       ></div>
//     </div>
//   );
// }

// export default App;
