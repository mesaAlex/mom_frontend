import { Link } from "react-router-dom";
import "../css/RecipeCard.css";

const RecipeCard = ({ id, imageSrc, title, description, tags, prepMinutes, cookMinutes, servings, calories, ingredients, instructions, compact = false, onEdit, onDelete }) => {
  const recipeState = { id, imageSrc, title, description, tags, prepMinutes, cookMinutes, servings, calories, ingredients, instructions };
  const cardContent = (
    <>
      <div className="recipe-image-wrapper">
        <img src={imageSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      {description ? <p className="recipe-card-description">{description}</p> : null}
      <div className="recipe-tags">
        {tags.map(tag => (
          <span key={`${title}-${tag}`} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="recipe-meta">
        <span>Prep: {prepMinutes} min</span>
        <span>Cook: {cookMinutes} min</span>
      </div>
    </>
  );

  if (compact) {
    return (
      <Link
        to={id ? `/view-recipe/${id}` : "/recipes"}
        state={{ recipe: recipeState }}
        className="recipe-card compact recipe-card-link"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="recipe-card">
      {cardContent}
      <div className="recipe-card-actions">
        <Link
          to={`/view-recipe/${id}`}
          state={{ recipe: recipeState }}
          className="btn-view-recipe"
        >
          View Recipe
        </Link>
        {onEdit && (
          <button
            type="button"
            className="btn-edit-recipe"
            onClick={() => onEdit(recipeState)}
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            type="button"
            className="btn-delete-recipe"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  );
};

export default RecipeCard;