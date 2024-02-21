import React from "react";
import Home from "./pages/Home";
import "./styles/app.css";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import Foundations from "./pages/Foundations";
import Blushers from "./pages/Blushers";
import Compacts from "./pages/Compacts";
import ProductsLayout from "./layouts/ProductsLayout";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/products" element={<ProductsLayout />}>
            <Route index element={<Products />} />
            <Route path="foundations" element={<Foundations />} />
            <Route path="blushers" element={<Blushers />} />
            <Route path="compacts" element={<Compacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
