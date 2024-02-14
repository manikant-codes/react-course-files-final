import React from "react";

// function ConditionalRenderingDemo(props) {
//   if (props.title) {
//     return (
//       <h1 style={{ textAlign: "center", padding: "48px" }}>{props.title}</h1>
//     );
//   }
//   return (
//     <h1 style={{ textAlign: "center", padding: "48px" }}>Default Title</h1>
//   );
// }

function ConditionalRenderingDemo(props) {
  return (
    <div style={{ textAlign: "center", padding: "48px" }}>
      {props.title ? (
        <h1>{props.title}</h1>
      ) : (
        <h1 style={{ textAlign: "center", padding: "48px" }}>Default Title</h1>
      )}
      {/* {props.showDesc ? (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, vel!
        </p>
      ) : null} */}

      {props.marks > 0 && <p>Congratulations!</p>}
    </div>
  );
}

export default ConditionalRenderingDemo;
