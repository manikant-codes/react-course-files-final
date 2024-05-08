import React from "react";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-8">
      {[...Array(10)].map(() => {
        return <ProductCard />;
      })}
    </div>
  );
}

export default ProductsList;
