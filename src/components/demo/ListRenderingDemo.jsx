import React from "react";

function ListRenderingDemo() {
  const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

  const components = fruits.map(function (value, index, array) {
    return <p>{value}</p>;
  });

  //   const components = [
  //     <p>{fruits[0]}</p>,
  //     <p>{fruits[1]}</p>,
  //     <p>{fruits[2]}</p>,
  //     <p>{fruits[3]}</p>,
  //     <p>{fruits[4]}</p>,
  //   ];

  return (
    <div style={{ padding: "64px", textAlign: "center" }}>
      <h1>ListRenderingDemo</h1>
      {components}
    </div>
  );
}

export default ListRenderingDemo;
