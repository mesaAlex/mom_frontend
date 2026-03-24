import "../css/RecipeHeaderSection.css";
import RecipeDetailsBox from "./RecipeDetailsBox";

const RecipeHeaderSection = ({ recipe }) => {
  return (
    <div className="recipe-header">
      <div className="recipe-info">
        <h1>{recipe.title}</h1>
        <p className="recipe-description">{recipe.description}</p>

        <div className="recipe-tags-detail">
          {recipe.tags.map(tag => (
            <span key={`${recipe.title}-${tag}`} className="tag-detail">{tag}</span>
          ))}
        </div>

        <RecipeDetailsBox prepMinutes={recipe.prepMinutes} cookMinutes={recipe.cookMinutes} servings={recipe.servings} />

        <div className="recipe-actions">
          <button className="btn-save" type="button">Save ♥</button>
          <button className="btn-meal-plan" type="button">Add to Meal Plan</button>
        </div>
      </div>

      <div className="recipe-image-large">
        <img src={recipe.imageSrc} alt={recipe.title} />
      </div>
    </div>
  );
};

export default RecipeHeaderSection;