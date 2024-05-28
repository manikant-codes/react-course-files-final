import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
import NewsCard from "../components/home/NewsCard";
import PaginationComponent from "../components/home/PaginationComponent";
import CarouselComponent from "../components/home/CarouselComponent";
import { getNewsAticles } from "../services/apiService";

function Home() {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    getNewsAticles()
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

export default Home;
