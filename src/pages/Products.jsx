import React, { useState } from "react";
import Title from "../components/common/Title";
import styles from "../styles/products/products.module.css";
import ProductsTab from "../components/products/ProductsTab";
import ProductsList from "../components/products/productsList/ProductsList";

function Products() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.containerOuter}>
      <Title
        title="Our Products"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, ipsam!"
      />
      <div className={styles.containerInner}>
        <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsList activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products;
