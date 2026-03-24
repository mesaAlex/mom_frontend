import "../css/View-recipe.css";
import salmonSalad from "../images/salmon_salad.png";
import RecipeBreadcrumb from "../components/RecipeBreadcrumb";
import RecipeHeaderSection from "../components/RecipeHeaderSection";
import RecipeIngredientsSection from "../components/RecipeIngredientsSection";
import RecipeInstructionsSection from "../components/RecipeInstructionsSection";
import RecipeVideoSection from "../components/RecipeVideoSection";

const RECIPE = {
  title: "Salmon Salad",
  description: "A fresh, high-protein salad with roasted salmon, crisp greens, and a simple lemon vinaigrette",
  tags: ["High-protein", "Low-carb", "Gut-friendly"],
  prepMinutes: "10 min",
  cookMinutes: "12 min",
  servings: 2,
  imageSrc: salmonSalad,
  ingredients: [
    "2 Salmon Fillets",
    "4 cups mixed greens",
    "1 avocado, sliced",
    "1 cup cherry tomatoes",
    "1/2 cucumber, slices",
    "2 tbs olive oil",
    "1 tbsp lemon juice",
    "1 tsp Dijon Mustard",
    "1 tsp honey",
    "Salt & pepper to taste"
  ],
  instructions: [
    "Preheat the oven to 400°F (200°C).",
    "Season the salmon fillets with salt, pepper, and a drizzle of olive oil. Place them on a lined baking sheet.",
    "Bake the salmon for 10-12 minutes, or until it flakes easily with a fork. Remove from the oven and let it rest for a few minutes.",
    "Taste the dressing.",
    "In a small bowl, whisk together olive oil, lemon juice, Dijon mustard, honey, salt, and pepper until well combined.",
    "Assemble the salad.",
    "In a large bowl, combine the mixed greens, sliced avocado, cherry tomatoes, and cucumber.",
    "Add the salmon.",
    "Flake the cooked salmon into large pieces and place it on top of the salad.",
    "Drizzle the dressing over the salad and toss gently to combine. Serve immediately."
  ]
};

const ViewRecipe = () => {
  return (
    <main className="recipe-detail-page">
      <RecipeBreadcrumb currentLabel={RECIPE.title} />

      <div className="wrap">
        <RecipeHeaderSection recipe={RECIPE} />

        <div className="recipe-content">
          <RecipeIngredientsSection ingredients={RECIPE.ingredients} />
          <RecipeInstructionsSection instructions={RECIPE.instructions} />
        </div>

        <RecipeVideoSection />
      </div>
    </main>
  );
};

export default ViewRecipe;