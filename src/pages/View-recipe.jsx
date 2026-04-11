import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../css/View-recipe.css";
import RecipeBreadcrumb from "../components/RecipeBreadcrumb";
import RecipeHeaderSection from "../components/RecipeHeaderSection";
import RecipeIngredientsSection from "../components/RecipeIngredientsSection";
import RecipeInstructionsSection from "../components/RecipeInstructionsSection";
import RecipeVideoSection from "../components/RecipeVideoSection";
import API_BASE_URL from "../api";

const ViewRecipe = () => {
  const { id } = useParams();
  const location = useLocation();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If recipe data was passed via Link state, use it directly
    if (location.state?.recipe) {
      const passed = location.state.recipe;
      axios.get(`${API_BASE_URL}/api/recipes/${id}`)
        .then(res => {
          const data = res.data;
          setRecipe({
            ...data,
            imageSrc: passed.imageSrc || `${API_BASE_URL}${data.image}`,
            prepMinutes: `${data.prepMinutes} min`,
            cookMinutes: `${data.cookMinutes} min`,
          });
          setLoading(false);
        })
        .catch(() => {
          // Fetch failed but we have passed data — use it as fallback
          setRecipe({
            ...passed,
            imageSrc: passed.imageSrc,
            prepMinutes: `${passed.prepMinutes} min`,
            cookMinutes: `${passed.cookMinutes} min`,
          });
          setLoading(false);
        });
    } else {
      axios.get(`${API_BASE_URL}/api/recipes/${id}`)
        .then(res => {
          const data = res.data;
          setRecipe({
            ...data,
            imageSrc: `${API_BASE_URL}${data.image}`,
            prepMinutes: `${data.prepMinutes} min`,
            cookMinutes: `${data.cookMinutes} min`,
          });
          setLoading(false);
        })
        .catch(err => {
          setError(err.response?.data?.message || err.message);
          setLoading(false);
        });
    }
  }, [id, location.state]);

  if (loading) {
    return (
      <main className="recipe-detail-page">
        <div className="wrap"><p className="recipes-status">Loading recipe...</p></div>
      </main>
    );
  }

  if (error || !recipe) {
    return (
      <main className="recipe-detail-page">
        <div className="wrap"><p className="recipes-status recipes-error">Error: {error || "Recipe not found"}</p></div>
      </main>
    );
  }

  return (
    <main className="recipe-detail-page">
      <RecipeBreadcrumb currentLabel={recipe.title} />

      <div className="wrap">
        <RecipeHeaderSection recipe={recipe} />

        <div className="recipe-content">
          <RecipeIngredientsSection ingredients={recipe.ingredients} />
          <RecipeInstructionsSection instructions={recipe.instructions} />
        </div>

        <RecipeVideoSection />
      </div>
    </main>
  );
};

export default ViewRecipe;