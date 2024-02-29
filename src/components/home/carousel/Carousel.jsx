import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";

function Carousel() {
  const images = [
    { src: "/images/01.jpg", alt: "Image 1" },
    { src: "/images/02.jpg", alt: "Image 2" },
    { src: "/images/03.jpg", alt: "Image 3" },
    { src: "/images/04.jpg", alt: "Image 4" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          bottom: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
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
