import React, { useRef, useState } from "react";
import classes from "./Testimonials.module.css";
import customer1 from "../../assets/images/customer1.png";
import customer2 from "../../assets/images/customer2.png";
import customer3 from "../../assets/images/customer3.png";
import arrowRight from "../../assets/images/right-arrow-orange.svg";
import arrowLeft from "../../assets/images/left-arrow-orange.svg";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SampleArrow />,
    nextArrow: <SampleArrow />,
    variableWidth: true,
    centerMode: true,
    afterChange: (current) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const testimonials = [
    {
      image: customer1,
      name: "Thomas josh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
    {
      image: customer2,
      name: "Golda Marya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
    {
      image: customer3,
      name: "Arun Thomas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
    {
      image: customer1,
      name: "Thomas josh",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
    {
      image: customer2,
      name: "Golda Marya",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
    {
      image: customer3,
      name: "Arun Thomas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ",
    },
  ];

  const renderIndicators = () => {
    return testimonials.map((_, index) => (
      <div
        key={index}
        className={`${classes.circle} ${
          index === activeSlide ? classes.active : ""
        }`}
        onClick={() => sliderRef.current.slickGoTo(index)}
      ></div>
    ));
  };

  return (
    <div className={classes.testimonials_main}>
      <h1 className={classes.heading_text}>Whats Our Customer Saying</h1>
      <div className={classes.slider_container}>
        <Slider ref={sliderRef} {...settings}>
          {testimonials?.map((testimoni, index) => (
            <TestimonialCard
              key={index}
              image={testimoni.image}
              name={testimoni.name}
              description={testimoni.description}
            />
          ))}
        </Slider>
        <div className={classes.indicators}>
          {" "}
          <img src={arrowLeft} alt="Arrow Left" onClick={prevSlide} />
          {renderIndicators()}
          <img src={arrowRight} alt="Arrow Right" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};
