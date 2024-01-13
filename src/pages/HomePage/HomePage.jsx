import React from 'react'
import classes from "./HomePage.module.css"
import { Header } from '../../components/Header/Header'
import { Banner } from '../../components/Banner/Banner'

export const HomePage = () => {
  return (
    <div className={classes.homePage_main}>
      <Header/>
      <Banner/>
    </div>
  )
}
