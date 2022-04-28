import React, { useState } from "react";
import PortfolioNav from "../PortfolioNav";
import ProjectList from "../ProjectList";

function Portfolio() {
  const [categories] = useState([
    {
      name: "front-end",
      description: "Front-end web development projects.",
    },
    {
      name: "back-end",
      description: "Back-end web development projects.",
    },
    {
      name: "full-stack",
      description: "Full Stack web development projects.",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section className="portfolio-container">
      <h1>Portfolio</h1>
      <PortfolioNav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <h2>Current Category: {capitalizeFirstLetter(currentCategory.name)}</h2>
      <p className="category-description">{currentCategory.description}</p>
      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Portfolio;
