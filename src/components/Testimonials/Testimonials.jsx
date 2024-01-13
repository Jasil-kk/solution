import React from "react";
import classes from "./Testimonials.module.css";
import customer1 from "../../assets/images/customer1.png";
import customer2 from "../../assets/images/customer2.png";
import customer3 from "../../assets/images/customer3.png";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";

export const Testimonials = () => {
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
  ];

  return (
    <div className={classes.testimonials_main}>
      <h1 className={classes.heading_text}>Whats Our Coustomer Saying</h1>
      <div>
        {testimonials?.map((testimoni, index) => (
          <TestimonialCard
            key={index}
            image={testimoni.image}
            name={testimoni.name}
            description={testimoni.description}
          />
        ))}
      </div>
    </div>
  );
};
