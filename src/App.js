import React from "react";
import Home from "./pages/Home";
import "./styles/app.css";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
