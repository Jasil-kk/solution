import React from "react";
import classes from "./CustomButton.module.css";

export const CustomButton = ({ text, icon }) => {
  return (
    <button className={classes.customButton}>
      {text} {icon && <img src={icon} alt="Icon" />}
    </button>
  );
};
