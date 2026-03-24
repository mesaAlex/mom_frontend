import "../css/RecipeControlsPreview.css";

const RecipeControlsPreview = () => {
  return (
    <section className="recipes-controls" aria-label="Recipe controls preview">
      <input type="text" className="recipe-search" placeholder="Search recipes, ingredients, or diets..." readOnly />
      <div className="filter-tags">
        <button type="button" className="filter-btn active">High-Protein</button>
        <button type="button" className="filter-btn">Low-Carb</button>
        <button type="button" className="filter-btn">Gut-Friendly</button>
        <button type="button" className="filter-btn">Anti-Inflammatory</button>
      </div>
    </section>
  );
};

export default RecipeControlsPreview;