import "../css/RecipeIngredientsSection.css";

const RecipeIngredientsSection = ({ ingredients }) => {
  return (
    <div className="ingredients-section">
      <section className="section-header">
        <h2>Ingredients</h2>
        <p className="ingredients-note">Amounts update when you change servings.</p>
      </section>

      <ul className="ingredients-list">
        {ingredients.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredientsSection;