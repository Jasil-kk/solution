import React from "react";
import classes from "./CustomButton.module.css";

export const CustomButton = ({ text, icon }) => {
  return (
    <button className={classes.customButton}>
      {text} <img src={icon} alt="Icon" />
    </button>
  );
};
