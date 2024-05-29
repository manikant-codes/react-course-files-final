import React, { memo, useEffect, useState } from "react";
import CarouselComponent from "../components/home/CarouselComponent";
import NewsCard from "../components/home/NewsCard";
import PaginationComponent from "../components/home/PaginationComponent";
import { getNewsAticles } from "../services/apiService";

function Home({ articles }) {
  if (!articles) return null;

  return (
    <div className="">
      <CarouselComponent />
      <div className="p-8">
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
