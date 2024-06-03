import { Flowbite } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Verse from "./pages/Verse";

function App() {
  return (
    <Flowbite>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/:chapter/:verse" element={<Verse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}

export default App;
