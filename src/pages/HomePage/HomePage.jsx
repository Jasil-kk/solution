import React from "react";
import classes from "./HomePage.module.css";
import { Header } from "../../components/Header/Header";
import { Banner } from "../../components/Banner/Banner";
import { OurSolutions } from "../../components/OurSolutions/OurSolutions";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Subscription } from "../../components/Subscription/Subscription";
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
  return (
    <div className={classes.homePage_main}>
      <Header />
      <Banner />
      <OurSolutions />
      <Testimonials />
      <Subscription/>
      <Footer/>
    </div>
  );
};
