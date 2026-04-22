import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import RecipeControlsPreview from "../components/RecipeControlsPreview";
import RecipesSlideshow from "../components/RecipesSlideshow";
import SectionIntro from "../components/SectionIntro";
import AddRecipe from "../components/AddRecipe";
import EditRecipe from "../components/EditRecipe";
import API_BASE_URL from "../api";
import "../css/Recipes.css";

const normalizeRecipe = (recipe) => ({
    ...recipe,
    id: recipe.id || recipe._id,
});

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [editingRecipe, setEditingRecipe] = useState(null);
    const [statusMessage, setStatusMessage] = useState("");

    const openAddDialog = () => {
        setShowAddDialog(true);
    };

    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    const addRecipeToList = (recipe) => {
        setRecipes((recipes) => [...recipes, normalizeRecipe(recipe)]);
    };

    const handleEdit = (recipe) => {
        setEditingRecipe(recipe);
    };

    const closeEditDialog = () => {
        setEditingRecipe(null);
    };

    const updateRecipeInList = (updatedRecipe) => {
        const normalizedUpdated = normalizeRecipe(updatedRecipe);
        setRecipes((prev) =>
            prev.map((r) => (r.id === normalizedUpdated.id ? normalizedUpdated : r))
        );
        setStatusMessage("Recipe updated successfully!");
        setTimeout(() => setStatusMessage(""), 4000);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this recipe?")) return;

        try {
            const response = await axios.delete(`${API_BASE_URL}/api/recipes/${id}`);
            if (response.status === 200) {
                setRecipes((prev) => prev.filter((r) => r.id !== id));
                setStatusMessage("Recipe deleted successfully!");
                setTimeout(() => setStatusMessage(""), 4000);
            }
        } catch (err) {
            const msg = err.response?.data?.error || err.message;
            setStatusMessage("Delete failed: " + msg);
            setTimeout(() => setStatusMessage(""), 4000);
        }
    };

    useEffect(() => {
        axios.get(`${API_BASE_URL}/api/recipes`)
            .then(res => {
                setRecipes(res.data.map(normalizeRecipe));
                setLoading(false);
            })
            .catch(err => {
                setError(err.response?.data?.message || err.message);
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

                <button className="btn primary btn-add-recipe" onClick={openAddDialog}>
                    + Add Recipe
                </button>

                {showAddDialog && (
                    <AddRecipe
                        closeAddDialog={closeAddDialog}
                        addRecipeToList={addRecipeToList}
                    />
                )}

                {editingRecipe && (
                    <EditRecipe
                        recipe={editingRecipe}
                        closeEditDialog={closeEditDialog}
                        updateRecipeInList={updateRecipeInList}
                    />
                )}

                {statusMessage && (
                    <p className={`recipes-status-message ${statusMessage.startsWith("Delete failed") ? "recipes-error" : "recipes-success"}`}>
                        {statusMessage}
                    </p>
                )}

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
                            servings={recipe.servings}
                            calories={recipe.calories}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
};

export default Recipes;