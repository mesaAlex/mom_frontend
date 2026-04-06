import { useState } from "react";
import "../css/RecipeDetailsBox.css";

const RecipeDetailsBox = ({ prepMinutes, cookMinutes, servings }) => {
  const [count, setCount] = useState(servings || 4);

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
          <button className="servings-btn" type="button" onClick={() => setCount(c => Math.max(1, c - 1))}>−</button>
          <span className="servings-value">{count}</span>
          <button className="servings-btn" type="button" onClick={() => setCount(c => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsBox;