import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NewsDetails from "./pages/NewsDetails";
import { useEffect, useState } from "react";
import { getNewsAticles } from "./services/apiService";
import NewsProvider from "./providers/NewsProvider";

function App() {
  return (
    <BrowserRouter>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news/:id" element={<NewsDetails />} />
          </Route>
        </Routes>
      </NewsProvider>
    </BrowserRouter>
  );
}

export default App;
