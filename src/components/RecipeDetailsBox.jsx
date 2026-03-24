import "../css/RecipeDetailsBox.css";

const RecipeDetailsBox = ({ prepMinutes, cookMinutes, servings }) => {
  return (
    <div className="recipe-details-box">
      <div className="detail-item">
        <span className="detail-label">Prep</span>
        <span className="detail-value">{prepMinutes}</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Cook</span>
        <span className="detail-value">{cookMinutes}</span>
      </div>
      <div className="detail-item servings-item">
        <span className="detail-label">Servings</span>
        <div className="servings-control">
          <button className="servings-btn" type="button">−</button>
          <span className="servings-value">{servings}</span>
          <button className="servings-btn" type="button">+</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsBox;