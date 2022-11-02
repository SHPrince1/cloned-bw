import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../styles/client.module.css";
import uba from "../images/uba.png"
import ecobank from "../images/ecobank.png"
import gtb from "../images/gtb.png"
import keystone from "../images/keystone.png"
import providus from "../images/providus.png"
import standard from "../images/standard.png"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      
    };
    return (
      <div className={style.slideBox}>
        <h1 className={style.hTitle}>OUR CLIENTS</h1>
        <Slider className={style.slideCont} {...settings}>
           

            <div>
             <img   className={style.imgs}src={uba} alt="fireSpot" />

          </div>
          <div>
          <img   className={style.imgs}src={ecobank} alt="fireSpot" />
          </div>
          <div>
          <img   className={style.imgs}src={gtb} alt="fireSpot" />
          </div>
          <div>
          <img   className={style.imgs}src={keystone} alt="fireSpot" />
          </div>
          <div>
          <img   className={style.imgs}src={providus} alt="fireSpot" />
          </div>
          <div>
          <img   className={style.imgs}src={standard} alt="fireSpot" />
          </div>
            
          
        </Slider>
      </div>
    );
  }
}
