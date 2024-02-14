import React from "react";

function ListRenderingDemo() {
  //   const arrJSX = [<p>Apple</p>, <p>Banana</p>, <p>Cherry</p>];

  const arr = ["Apple", "Banana", "Cherry"];

  //   const paras = arr.map((value, index) => {
  //     return <p>{value}</p>;
  //   });

  return (
    <div style={{ textAlign: "center", padding: "48px" }}>
      <h1>List Rendering Demo</h1>
      <div>
        {arr.map((value, index) => {
          return <p>{value}</p>;
        })}
      </div>
    </div>
  );
}

export default ListRenderingDemo;
