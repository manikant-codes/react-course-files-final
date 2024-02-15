import React from "react";
import Card from "../home/Card";

function ListRenderingDemo() {
  const data = [
    {
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet.",
      img: "/images/01.jpg",
    },
    {
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet.",
      img: "/images/02.jpg",
    },
    {
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet.",
      img: "/images/03.jpg",
    },
    {
      title: "Product 4",
      desc: "Lorem ipsum dolor sit amet.",
      img: "/images/04.jpg",
    },
  ];

  // const components = data.map((value, index) => {
  //   return <Card title={value.title} src={value.img} desc={value.desc} />;
  // });

  return (
    <div style={{ textAlign: "center", padding: "48px" }}>
      <h1>List Rendering Demo</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {data.map((value, index) => {
          return (
            <Card
              key={index}
              title={value.title}
              src={value.img}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListRenderingDemo;
