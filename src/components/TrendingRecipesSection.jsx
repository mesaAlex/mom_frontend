import RecipeCard from "./RecipeCard";
import "../css/TrendingRecipesSection.css";

const TrendingRecipesSection = ({ recipes }) => {
  return (
    <section className="recipes-preview">
      <div className="wrap">
        <h2>Trending Recipes</h2>
        <div className="recipes-preview-grid">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.title} {...recipe} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingRecipesSection;