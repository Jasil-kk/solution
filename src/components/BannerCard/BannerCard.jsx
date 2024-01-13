import React from "react";
import classes from "./BannerCard.module.css";

export const BannerCard = ({ text, image, onClick }) => {
  return (
    <div
      className={classes.bannerCard}
      style={{
        // backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img src={image} alt="" />
      <h3 className={classes.card_text}>{text}</h3>
      <button className={classes.card_btn}>Play Now</button>
    </div>
  );
};
