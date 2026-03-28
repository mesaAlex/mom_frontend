import RecipeCard from "../components/RecipeCard";
import RecipeControlsPreview from "../components/RecipeControlsPreview";
import RecipesSlideshow from "../components/RecipesSlideshow";
import SectionIntro from "../components/SectionIntro";
import "../css/Recipes.css";
import salmonSalad from "../images/salmon_salad.png";
import chickenSalad from "../images/chicken_salad.png";
import tofuSalad from "../images/tofu_salad.png";

const RECIPES = [
    {
        imageSrc: salmonSalad,
        title: "Salmon Salad",
        description: "Roasted salmon, crisp greens, and lemon vinaigrette.",
        tags: ["High-protein", "Low-carb"],
        prepMinutes: 10,
        cookMinutes: 12
    },
    {
        imageSrc: chickenSalad,
        title: "Chicken Salad",
        description: "Lean protein and fresh vegetables for a balanced plate.",
        tags: ["High-protein", "Gut-friendly"],
        prepMinutes: 12,
        cookMinutes: 14
    },
    {
        imageSrc: tofuSalad,
        title: "Tofu Salad",
        description: "Plant-based recipe with fiber and healthy fats.",
        tags: ["Low-carb", "Anti-inflammatory"],
        prepMinutes: 13,
        cookMinutes: 10
    },
    {
        imageSrc: salmonSalad,
        title: "Mediterranean Bowl",
        description: "Whole-food ingredients with protein and bright herbs.",
        tags: ["High-protein", "Gut-friendly"],
        prepMinutes: 16,
        cookMinutes: 10
    },
    {
        imageSrc: chickenSalad,
        title: "Power Lunch Plate",
        description: "Quick weekday lunch with filling nutrient-dense sides.",
        tags: ["High-protein", "Low-carb"],
        prepMinutes: 11,
        cookMinutes: 9
    },
    {
        imageSrc: tofuSalad,
        title: "Green Crunch Salad",
        description: "Crisp textures and simple dressing for easy prep.",
        tags: ["Gut-friendly", "Anti-inflammatory"],
        prepMinutes: 9,
        cookMinutes: 8
    }
];

const Recipes = () => {
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

                <section className="recipes-grid" aria-label="Recipes list">
                    {RECIPES.map(recipe => (
                        <RecipeCard key={recipe.title} {...recipe} viewLink="/view-recipe" />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Recipes;