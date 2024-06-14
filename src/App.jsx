import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import MyFirstClassComponent from "./components/ClassComponetsDemoI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyFirstClassComponent name="Manikant" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
