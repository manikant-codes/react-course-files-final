import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WeatherApp from "./pages/WeatherApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
