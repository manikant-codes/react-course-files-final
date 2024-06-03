import { Carousel } from "flowbite-react";
import React, { useContext } from "react";
import { newsContext } from "../../providers/NewsProvider";

function CarouselComponent() {
  const { articles } = useContext(newsContext);

  let images = [
    "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  ];

  if (articles) {
    images = articles.slice(0, 5).map((value) => {
      return value.urlToImage;
    });
  }

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {images.map((value, index) => {
          return <img key={index} src={value} alt="..." />;
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
