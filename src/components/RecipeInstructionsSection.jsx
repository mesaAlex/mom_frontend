import "../css/RecipeInstructionsSection.css";

const RecipeInstructionsSection = ({ instructions }) => {
  return (
    <div className="instructions-section">
      <h2>Instructions</h2>
      <ol className="instructions-list">
        {instructions.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructionsSection;