import React from "react";
import styles from "../../styles/home/hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${styles.navBtn} ${styles.navBtnNext}`}
    >
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${styles.navBtn} ${styles.navBtnPrev}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
}

function customDots(dots) {
  return (
    <div>
      <ul className={styles.customDots}>{dots}</ul>
    </div>
  );
}

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: customDots,
  };
  return (
    <Slider
      {...settings}
      // dots={true}
      // infinite={true}
      // speed={500}
      // slidesToShow={1}
      // slidesToScroll={1}
    >
      <div className={styles.container}>
        <img src="/images/01.jpg" alt="" className={styles.slideImage} />
      </div>
      <div className={styles.container}>
        <img src="/images/02.jpg" alt="" className={styles.slideImage} />
      </div>
    </Slider>
  );
}
// <div className={styles.overlay} />
// <img className={styles.heroImage} src="/images/07.jpg" alt="hero" />
// <div className={styles.textContainer}>
//   <h2>Welcome to our website</h2>
// </div>

export default Hero;
