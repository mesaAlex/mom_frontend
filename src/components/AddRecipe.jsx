import { useState } from "react";
import API_BASE_URL from "../api";
import "../css/AddRecipe.css";

const VALID_TAGS = ["High-protein", "Low-carb", "Gut-friendly", "Anti-inflammatory"];

const AddRecipe = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [tags, setTags] = useState([]);
  const [prepMinutes, setPrepMinutes] = useState("");
  const [cookMinutes, setCookMinutes] = useState("");
  const [servings, setServings] = useState("");
  const [calories, setCalories] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const handleTagToggle = (tag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setPrevSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Client-side validation that mirrors the Joi schema on the server
  const validate = () => {
    const newErrors = {};

    if (!title || title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }
    if (!description || description.trim().length < 5) {
      newErrors.description = "Description must be at least 5 characters";
    }
    if (tags.length < 1) {
      newErrors.tags = "Select at least one tag";
    }
    if (prepMinutes === "" || Number(prepMinutes) < 0) {
      newErrors.prepMinutes = "Prep time must be 0 or more";
    }
    if (cookMinutes === "" || Number(cookMinutes) < 0) {
      newErrors.cookMinutes = "Cook time must be 0 or more";
    }
    if (servings === "" || Number(servings) < 1) {
      newErrors.servings = "Servings must be at least 1";
    }
    if (calories === "" || Number(calories) < 0) {
      newErrors.calories = "Calories must be 0 or more";
    }

    const ingredientsList = ingredients
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    if (ingredientsList.length < 1) {
      newErrors.ingredients = "Enter at least one ingredient";
    }

    const instructionsList = instructions
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
    if (instructionsList.length < 1) {
      newErrors.instructions = "Enter at least one instruction";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");

    if (!validate()) return;

    setResult("Sending...");

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("description", description.trim());
    formData.append("tags", JSON.stringify(tags));
    formData.append("prepMinutes", prepMinutes);
    formData.append("cookMinutes", cookMinutes);
    formData.append("servings", servings);
    formData.append("calories", calories);
    formData.append(
      "ingredients",
      JSON.stringify(
        ingredients.split("\n").map((s) => s.trim()).filter(Boolean)
      )
    );
    formData.append(
      "instructions",
      JSON.stringify(
        instructions.split("\n").map((s) => s.trim()).filter(Boolean)
      )
    );

    // Grab file from the input
    const fileInput = document.getElementById("add-img");
    if (fileInput && fileInput.files[0]) {
      formData.append("img", fileInput.files[0]);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/recipes`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newRecipe = await response.json();
        setResult("Recipe added successfully!");
        props.addRecipeToList(newRecipe);
        props.closeAddDialog();
      } else {
        const errorPayload = await response.json().catch(() => null);
        const message = errorPayload?.error || errorPayload?.message || `Request failed with status ${response.status}`;
        setResult("Error: " + message);
      }
    } catch {
      setResult("Unable to add recipe. Please try again.");
    }
  };

  return (
    <div className="add-recipe-overlay">
      <div className="add-recipe-modal">
        <span className="add-recipe-close" onClick={props.closeAddDialog}>
          &times;
        </span>
        <form className="add-recipe-form" onSubmit={handleSubmit}>
          <h2>Add New Recipe</h2>

          <label htmlFor="add-title">Title</label>
          <input
            id="add-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Salmon Salad"
          />
          {errors.title && <span className="field-error">{errors.title}</span>}

          <label htmlFor="add-description">Description</label>
          <textarea
            id="add-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A short description of the recipe"
            rows="2"
          />
          {errors.description && (
            <span className="field-error">{errors.description}</span>
          )}

          <label htmlFor="add-img">Recipe Image</label>
          <div className="add-recipe-image-select">
            <input
              type="file"
              id="add-img"
              name="img"
              accept="image/*"
              onChange={uploadImage}
            />
            {prevSrc && (
              <div className="add-recipe-image-preview">
                <img src={prevSrc} alt="Preview" />
              </div>
            )}
          </div>

          <label>Tags</label>
          <div className="add-recipe-tags">
            {VALID_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-toggle ${tags.includes(tag) ? "active" : ""}`}
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {errors.tags && <span className="field-error">{errors.tags}</span>}

          <div className="add-recipe-row">
            <div className="add-recipe-field">
              <label htmlFor="add-prep">Prep (min)</label>
              <input
                id="add-prep"
                type="number"
                min="0"
                value={prepMinutes}
                onChange={(e) => setPrepMinutes(e.target.value)}
              />
              {errors.prepMinutes && (
                <span className="field-error">{errors.prepMinutes}</span>
              )}
            </div>
            <div className="add-recipe-field">
              <label htmlFor="add-cook">Cook (min)</label>
              <input
                id="add-cook"
                type="number"
                min="0"
                value={cookMinutes}
                onChange={(e) => setCookMinutes(e.target.value)}
              />
              {errors.cookMinutes && (
                <span className="field-error">{errors.cookMinutes}</span>
              )}
            </div>
            <div className="add-recipe-field">
              <label htmlFor="add-servings">Servings</label>
              <input
                id="add-servings"
                type="number"
                min="1"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
              {errors.servings && (
                <span className="field-error">{errors.servings}</span>
              )}
            </div>
            <div className="add-recipe-field">
              <label htmlFor="add-calories">Calories</label>
              <input
                id="add-calories"
                type="number"
                min="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
              {errors.calories && (
                <span className="field-error">{errors.calories}</span>
              )}
            </div>
          </div>

          <label htmlFor="add-ingredients">Ingredients (one per line)</label>
          <textarea
            id="add-ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder={"2 Salmon Fillets\n4 cups mixed greens\n1 avocado, sliced"}
            rows="4"
          />
          {errors.ingredients && (
            <span className="field-error">{errors.ingredients}</span>
          )}

          <label htmlFor="add-instructions">Instructions (one per line)</label>
          <textarea
            id="add-instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder={"Preheat the oven to 400°F.\nSeason the salmon with salt and pepper."}
            rows="4"
          />
          {errors.instructions && (
            <span className="field-error">{errors.instructions}</span>
          )}

          <button type="submit" className="btn primary add-recipe-submit">
            Add Recipe
          </button>
          {result && (
            <p
              className={`add-recipe-result ${
                result.startsWith("Error") || result.startsWith("Unable")
                  ? "error"
                  : ""
              }`}
            >
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
