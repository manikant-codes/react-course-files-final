import React, { createContext, useState } from "react";

export const newsContext = createContext();

function NewsProvider({ children }) {
  const [articles, setArticles] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const value = {
    articles,
    query,
    setArticles,
    setQuery,
    currentPage,
    onPageChange,
  };

  return <newsContext.Provider value={value}>{children}</newsContext.Provider>;
}

export default NewsProvider;
