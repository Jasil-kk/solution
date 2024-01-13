import React, { useRef, useState } from "react";
import classes from "./Banner.module.css";
import buttonArrow from "../../assets/images/button-arrow.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import drill from "../../assets/images/drill.png";
import helmet from "../../assets/images/helmet.png";
import tire from "../../assets/images/tire.png";
import { CustomButton } from "../CustomButton/CustomButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerCard } from "../BannerCard/BannerCard";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
export const Banner = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SampleArrow />,
    nextArrow: <SampleArrow />,
    variableWidth: true,
    centerMode: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className={classes.banner_main}>
      <h4 className={classes.label_text}>
        Innovative augmented reality solutions for eCommerce businesses -{" "}
        <span style={{ marginRight: "1.5rem" }}>View our visual gallery.</span>
        For a free demo, write to us: <span>hello@tulfa.com</span>
      </h4>
      <div className={classes.banner_container}>
        <h1 className={classes.banner_heading}>
          Check out our portfolio to discover how we can make your product
          listings pop.
        </h1>
        <p className={classes.banner_para}>
          Like the content you see from our portfolio? Click the link below and
          fill out the contact form to receive a free, personalized demo.
        </p>
        <div className={classes.button_container}>
          <CustomButton text="CONTACT US" icon={buttonArrow} />
        </div>
        <div className={classes.card_container}>
          <div style={{ width: "100%" }}>
            <Slider ref={sliderRef} {...settings}>
              <BannerCard text="AR/VR/XR  Solution" image={drill} />
              <BannerCard text="AR/VR/XR  Solution" image={tire} />
              <BannerCard text="AR/VR/XR  Solution" image={helmet} />
              <BannerCard text="AR/VR/XR  Solution" image={drill} />
              <BannerCard text="AR/VR/XR  Solution" image={tire} />
              <BannerCard text="AR/VR/XR  Solution" image={helmet} />
              <BannerCard text="AR/VR/XR  Solution" image={drill} />
              <BannerCard text="AR/VR/XR  Solution" image={tire} />
              <BannerCard text="AR/VR/XR  Solution" image={helmet} />
            </Slider>
          </div>
          <div className={classes.arrow_container}>
            <img src={arrowLeft} alt="Left Arrow" onClick={prevSlide} />
            <img src={arrowRight} alt="Right Arrow" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};
