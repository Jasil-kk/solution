import React from "react";
import classes from "./SolutionsCard.module.css";
export const SolutionsCard = ({ image, headText, paraText, isFirst }) => {
  return (
    <div
      className={`${classes.solutionsCard} ${isFirst ? classes.firstCard : ""}`}
    >
      <img src={image} alt={headText} className={classes.card_image} />
      <h2 className={classes.headText}>{headText}</h2>
      <p className={classes.paraText}>{paraText}</p>
    </div>
  );
};
