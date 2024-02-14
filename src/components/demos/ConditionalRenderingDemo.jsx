import React from "react";

function ConditionalRenderingDemo(props) {
  //   let toShow = null;

  //   if (props.title) {
  //     toShow = props.title;
  //   } else {
  //     toShow = "Default Title";
  //   }

  return (
    <div style={{ padding: "64px" }}>
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.title ? props.title : "Default Title"}
      </h2>
      {/* {props.showPara ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          asperiores!
        </p>
      ) : null} */}
      {props.marks > 0 && <p>Congratulations!</p>}
    </div>
  );
}

export default ConditionalRenderingDemo;
