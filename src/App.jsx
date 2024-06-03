import { Flowbite } from "flowbite-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import NewsProvider from "./providers/NewsProvider";

function App() {
  return (
    <Flowbite>
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
      {/* <DarkThemeToggle /> */}
    </Flowbite>
  );
}

export default App;
