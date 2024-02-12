import React from "react";
import Card from "./Card";
import Title from "../common/Title";

function ProductsRow() {
  return (
    <div style={{ padding: "32px" }}>
      <Title
        title="Our Recent Products"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr))",
          gap: 16,
        }}
      >
        <Card
          src="/images/01.jpg"
          title="Product 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
        />
        <Card
          src="/images/02.jpg"
          title="Product 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
        />
        <Card
          src="/images/03.jpg"
          title="Product 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
        />
        <Card
          src="/images/04.jpg"
          title="Product 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, expedita."
        />
      </div>
    </div>
  );
}

export default ProductsRow;
