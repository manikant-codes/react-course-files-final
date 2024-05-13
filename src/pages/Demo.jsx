import React from "react";
import { Provider } from "react-redux";
import HOC from "../components/HOC";
import ProductCard from "../components/productsList/ProductCard";
import { products } from "../data/cartData";
import myStore from "../redux/store";

function Demo() {
  return (
    <Provider store={myStore}>
      <ul className="grid grid-cols-4 gap-2">
        <HOC list={products} listItem={ProductCard} />
      </ul>
    </Provider>
  );
}

export default Demo;
