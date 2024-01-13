import React, { useState } from "react";
import classes from "./OurSolutions.module.css";
import crook from "../../assets/images/crook.png";
import stonefire from "../../assets/images/stonefire.png";
import neutogena from "../../assets/images/neutogena.png";
import crafter from "../../assets/images/crafter.png";
import augment from "../../assets/images/augment.png";
import cubs from "../../assets/images/cubs.png";
import rightArrow from "../../assets/images/right-arrow-orange.svg";
import letArrow from "../../assets/images/left-arrow-orange.svg";
import { SolutionsCard } from "../SolutionsCard/SolutionsCard";
import ReactPaginate from "react-paginate";

export const OurSolutions = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      const pageNumber = i < 10 ? `0${i}` : `${i}`;
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i - 1)}
          className={i === currentPage + 1 ? "active" : ""}
        >
          {pageNumber}
        </button>
      );
    }

    return pageNumbers;
  };
  const ourSolutions = [
    {
      image: augment,
      headText: "AR/VR/XR  Solution",
      paraText: "CGI - Enhanced Brand Content​ - Home & Hardware",
    },
    {
      image: stonefire,
      headText: "Naan Stonefire",
      paraText: "CGI - Enhanced Brand Content - Food & Beverage",
    },
    {
      image: cubs,
      headText: "Chicago Cubs",
      paraText: "CGI - Fashion & Apparel",
    },
    {
      image: neutogena,
      headText: "Neutrogena  Naturals",
      paraText: "CGI - Enhanced Brand Content ​- Health & Beauty",
    },
    {
      image: crafter,
      headText: "Crafters Union",
      paraText:
        "Product Photography - Enhanced Brand Content - Food & Beverage",
    },
    {
      image: crook,
      headText: "Crook & Marker",
      paraText:
        "Product Photography - Enhanced Brand Content - Food & Beverage",
    },
  ];
  return (
    <div className={classes.ourSolutions_main}>
      <h1 className={classes.heading_text}>Our Solutions</h1>
      <nav>
        <ul className={classes.items_container}>
          <li className={classes.active}>All</li>
          <li>CGI</li>
          <li>Enhanced Brand Content</li>
          <li>Product Photography</li>
          <li>Creative Services</li>
        </ul>
      </nav>
      <div className={classes.card_container}>
        {ourSolutions?.map((solution, index) => (
          <SolutionsCard
            key={index}
            image={solution.image}
            headText={solution.headText}
            paraText={solution.paraText}
            isFirst={index === 0}
          />
        ))}
      </div>
      <ReactPaginate
       breakLabel="..."
        pageCount={20}
        pageRangeDisplayed={10}
        marginPagesDisplayed={0}
        onPageChange={handlePageChange}
        containerClassName={classes.pagination}
        activeClassName={classes.active}
        previousLabel={<img src={letArrow} alt="Previous" />}
        nextLabel={<img src={rightArrow} alt="Next" />}
        nextClassName={classes.next}
        previousClassName={classes.prev}
      />
    </div>
  );
};
