import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import RecipeControlsPreview from "../components/RecipeControlsPreview";
import RecipesSlideshow from "../components/RecipesSlideshow";
import SectionIntro from "../components/SectionIntro";
import API_BASE_URL from "../api";
import "../css/Recipes.css";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/recipes`)
            .then(res => {
                if (!res.ok) throw new Error("Failed to load recipes");
                return res.json();
            })
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <main className="recipes-page">
            <div className="wrap">
                <SectionIntro
                    className="recipes-hero"
                    title="Recipe Library"
                    description="Browse and save recipes that match your goals."
                    descriptionClassName="recipes-subtext"
                />

                <RecipesSlideshow />

                <RecipeControlsPreview />

                {loading && <p className="recipes-status">Loading recipes...</p>}
                {error && <p className="recipes-status recipes-error">Error: {error}</p>}

                <section className="recipes-grid" aria-label="Recipes list">
                    {recipes.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            id={recipe.id}
                            imageSrc={`${API_BASE_URL}${recipe.image}`}
                            title={recipe.title}
                            description={recipe.description}
                            tags={recipe.tags}
                            prepMinutes={recipe.prepMinutes}
                            cookMinutes={recipe.cookMinutes}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Recipes;