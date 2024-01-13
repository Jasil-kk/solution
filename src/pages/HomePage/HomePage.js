import React from 'react'
import classes from "./HomePage.module.css"
import { Header } from '../../components/Header/Header'

export const HomePage = () => {
  return (
    <div className={classes.homePage_main}>
      <Header/>
    </div>
  )
}
