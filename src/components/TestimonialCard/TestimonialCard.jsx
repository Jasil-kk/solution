import React from 'react'
import classes from "./TestimonialCard.module.css"

export const TestimonialCard = ({image,name,description}) => {
  return (
    <div className={classes.testimonialCard}>
        <div className={classes.avatar}>
            <img src={image} alt={name} />
        </div>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.description}>{description}</p>
    </div>
  )
}
