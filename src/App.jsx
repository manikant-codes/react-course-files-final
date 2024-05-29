import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NewsDetails from "./pages/NewsDetails";
import { useEffect, useState } from "react";
import { getNewsAticles } from "./services/apiService";

function App() {
  const [articles, setArticles] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getNewsAticles(query || "india")
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              query={query}
              setQuery={setQuery}
              setArticles={setArticles}
            />
          }
        >
          <Route index element={<Home articles={articles} />} />
          <Route path="news/:id" element={<NewsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
