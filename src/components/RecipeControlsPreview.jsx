import { useState } from "react";
import "../css/RecipeControlsPreview.css";

const FILTERS = ["High-Protein", "Low-Carb", "Gut-Friendly", "Anti-Inflammatory"];

const RecipeControlsPreview = () => {
  const [activeFilter, setActiveFilter] = useState("High-Protein");

  return (
    <section className="recipes-controls" aria-label="Recipe controls">
      <input type="text" className="recipe-search" placeholder="Search recipes, ingredients, or diets..." />
      <div className="filter-tags">
        {FILTERS.map(filter => (
          <button
            key={filter}
            type="button"
            className={`filter-btn${activeFilter === filter ? " active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecipeControlsPreview;