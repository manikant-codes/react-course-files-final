import React, { useState } from "react";
import Title from "../components/common/Title";
import styles from "../styles/products/products.module.css";
import ProductsTab from "../components/products/productsTab/ProductsTab";
import ProductsGallery from "../components/products/productsGallery/ProductsGallery";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.productsContainer}>
      <Title
        title="Our Products"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quis at blanditiis voluptatum facilis aperiam?"
      />
      <div className={styles.productsContainerInner}>
        <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products;
