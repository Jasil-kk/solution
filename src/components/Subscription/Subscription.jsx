import React from "react";
import classes from "./Subscription.module.css";
import { CustomButton } from "../CustomButton/CustomButton";
import backgroundImage1 from "../../assets/images/left-background-bubble.png"
import backgroundImage2 from "../../assets/images/right_background-bubble.png"


export const Subscription = () => {
  return (
    <div className={classes.subscription_main}>
      <h2 className={classes.heading_text}>
        Subscribe to Solution Newsletters
      </h2>
      <p className={classes.para_text}>
        Get the latest insights and research delivered straight to your inbox.
      </p>
      <div className={classes.button_container}>
      <CustomButton text="SUSCRIBE" /></div>
      <img src={backgroundImage1} alt="Background Bubble" className={classes.backgroundImage1} />
      <img src={backgroundImage2} alt="Background Buuble" className={classes.backgroundImage2}/>

    </div>
  );
};
