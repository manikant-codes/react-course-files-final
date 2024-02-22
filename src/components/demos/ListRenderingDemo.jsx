import React from "react";
import ServiceCard from "../home/servicesRow/ServiceCard";

function ListRenderingDemo() {
  //   const arr = ["apple", "banana", "orange"];

  const arr = [
    {
      src: "/images/01.jpg",
      title: "Title 1",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "/images/02.jpg",
      title: "Title 2",
      desc: "Lorem ipsum dolor sit amet.",
    },
    {
      src: "/images/03.jpg",
      title: "Title 3",
      desc: "Lorem ipsum dolor sit amet.",
    },
  ];

  //   const components = [<p>{arr[0]}</p>, <p>{arr[1]}</p>, <p>{arr[2]}</p>];
  //   const components = arr.map(function (value, index, array) {
  //     return <p>{value}</p>;
  //   });

  const components = arr.map(function (value, index, array) {
    return (
      <ServiceCard
        key={index}
        src={value.src}
        title={value.title}
        desc={value.desc}
      />
    );
  });

  return (
    <div style={{ padding: "64px", textAlign: "center" }}>
      <h2>List Rendering Demo</h2>

      {components}
    </div>
  );
}

export default ListRenderingDemo;
