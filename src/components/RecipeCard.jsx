import { Link } from "react-router-dom";
import "../css/RecipeCard.css";

const RecipeCard = ({ id, imageSrc, title, description, tags, prepMinutes, cookMinutes, compact = false }) => {
  return (
    <article className={`recipe-card${compact ? " compact" : ""}`}>
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
      {!compact ? (
        <Link to={`/view-recipe/${id}`} className="btn-view-recipe">
          View Recipe
        </Link>
      ) : null}
    </article>
  );
};

export default RecipeCard;