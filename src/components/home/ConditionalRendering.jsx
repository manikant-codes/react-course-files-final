import React from "react";

// function ConditionalRendering(props) {
//   if (props.title) {
//     return <h1>{props.title}</h1>;
//   }
//   return <h1>Default Title</h1>;
// }

function ConditionalRendering(props) {
  return (
    <>
      <h1> {props.title ? props.title : "Default Title"}</h1>
      {/* {props.showDesc ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          perferendis!
        </p>
      ) : null} */}
      {props.showDesc && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          perferendis!
        </p>
      )}
    </>
  );
}

export default ConditionalRendering;
