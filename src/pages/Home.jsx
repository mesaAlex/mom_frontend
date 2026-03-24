import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import TrendingRecipesSection from "../components/TrendingRecipesSection";
import "../css/Home.css";
import iconNutrition from "../images/icon_nutrition.png";
import nutritionIconTransparent from "../images/nutrition_icon_transparent.png";
import checklistIcon from "../images/checklist_icon.png";
import salmonSalad from "../images/salmon_salad.png";
import chickenSalad from "../images/chicken_salad.png";
import tofuSalad from "../images/tofu_salad.png";

const FEATURES = [
    {
        imageSrc: iconNutrition,
        imageAlt: "Meal plan icon",
        title: "Track Your Meals",
        description: "See what you're eating and how it aligns with your goals."
    },
    {
        imageSrc: nutritionIconTransparent,
        imageAlt: "Nutrition icon",
        title: "Understand Your Nutrition",
        description: "Learn what nutrients you may be missing and how it affects your body."
    },
    {
        imageSrc: checklistIcon,
        imageAlt: "Planning icon",
        title: "Plan with Purpose",
        description: "Build meal plans that support your health, not just your schedule."
    }
];

const TRENDING_RECIPES = [
    {
        imageSrc: salmonSalad,
        title: "Salmon Salad",
        description: "Fresh greens, healthy fats, and a quick protein boost.",
        tags: ["High-protein", "Low-carb"],
        prepMinutes: 12,
        cookMinutes: 6
    },
    {
        imageSrc: chickenSalad,
        title: "Chicken Salad",
        description: "Simple prep with balanced flavor for weekday meals.",
        tags: ["High-protein", "Low-carb"],
        prepMinutes: 13,
        cookMinutes: 6
    },
    {
        imageSrc: tofuSalad,
        title: "Tofu Salad",
        description: "Plant-forward, nutrient-dense, and perfect for meal prep.",
        tags: ["High-protein", "Low-carb"],
        prepMinutes: 13,
        cookMinutes: 6
    }
];

const Home = () => {
    return (
        <main className="home-page">
            <Hero />
            <FeaturesSection features={FEATURES} />
            <TrendingRecipesSection recipes={TRENDING_RECIPES} />
        </main>
    );
};

export default Home;