import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../../data/cartData";

function ProductsList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-8">
      {products.map((value) => {
        return <ProductCard key={value.id} product={value} />;
      })}
    </div>
  );
}

export default ProductsList;
