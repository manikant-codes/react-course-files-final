import React from "react";
import Card from "../components/home/Card";
import Title from "../components/common/Title";

function Products() {
  const data = [
    {
      src: "/images/01.jpg",
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/02.jpg",
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/03.jpg",
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
    {
      src: "/images/04.jpg",
      title: "Product 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita.",
    },
  ];
  return (
    <div style={{ padding: "32px" }}>
      <Title
        title="Our Products"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, porro."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {data.concat(data, data, data).map((value, index) => {
          return (
            <Card
              key={index}
              src={value.src}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
