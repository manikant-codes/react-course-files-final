import React from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-6">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            rating={product.rating}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
