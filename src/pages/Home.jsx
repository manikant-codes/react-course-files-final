import React, { memo, useContext, useEffect, useState } from "react";
import CarouselComponent from "../components/home/CarouselComponent";
import NewsCard from "../components/home/NewsCard";
import PaginationComponent from "../components/home/PaginationComponent";
import { getNewsAticles } from "../services/apiService";
import { newsContext } from "../providers/NewsProvider";
import { useThemeMode } from "flowbite-react";

function Home() {
  const { articles, setArticles, query, currentPage } = useContext(newsContext);
  const { mode } = useThemeMode();

  useEffect(() => {
    getNewsAticles(query || "india", currentPage)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  if (!articles) return null;

  return (
    <div className="">
      <CarouselComponent />
      <div
        className={`p-8 ${mode === "dark" ? "bg-gray-700" : "bg-gray-100"} `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => {
            return <NewsCard key={index} article={article} />;
          })}
        </div>
        <PaginationComponent />
      </div>
    </div>
  );
}

export default memo(Home);
