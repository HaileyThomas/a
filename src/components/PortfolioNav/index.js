import React from "react";

function PortfolioNav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <section className="portfolio-nav">
      {categories.map((category) => (
        <li
          className={`portfolio-nav-list ${
            currentCategory.name === category.name && "navActive"
          }`}
          key={category.name}
        >
          <span
            className="portfolio-nav-btn"
            onClick={() => {
              setCurrentCategory(category);
            }}
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </section>
  );
}

export default PortfolioNav;
