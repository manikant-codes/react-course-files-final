import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

function Carousel() {
  const images = [
    { src: "/images/01.jpg", alt: "Image 1" },
    { src: "/images/02.jpg", alt: "Image 2" },
    { src: "/images/03.jpg", alt: "Image 3" },
    { src: "/images/04.jpg", alt: "Image 4" },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      //   dots
      //   inifinte
      //   speed={500}
      //   slidesToShow={1}
      //   slidesToScroll={1}
    >
      {images.map(function (value, index) {
        return <Slide key={index} src={value.src} alt={value.alt} />;
      })}
    </Slider>
  );
}

export default Carousel;
