import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slideStyle from "../styles/slider.module.css";

const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, SetautoPlay] = useState(true);

  let timeOut = null;
  useEffect(() => {
   
      setTimeout(() => {
        SlideRight();
      }, 10000);
  });
  function SlideLeft() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  function SlideRight() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return (
    <>
      <div className={slideStyle.caroBox}>
        <div className={slideStyle.cardWrapper}>
          {images.map((images, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? slideStyle.caroCardActive
                    : slideStyle.caroCard
                }
              >
                <div className={slideStyle.cardImage}>{images.image}</div>

                <div className={slideStyle.cardOverlay}>
                  <h2 className={slideStyle.title}>{images.title}
                  </h2>
                  {/* <button>SEE MORE</button> */}
                </div>
              </div>
            );
          })}
          <div className={slideStyle.carouselArrowLeft} onClick={SlideLeft}>
            &lsaquo;
          </div>
          <div className={slideStyle.carouselArrowRight} onClick={SlideRight}>
            &rsaquo;
          </div>

         <a href="/" className={slideStyle.btn} >See More </a>
        </div>
      </div>
    </>
  );
};

export default Slider;
