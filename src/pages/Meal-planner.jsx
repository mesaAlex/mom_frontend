import "../css/Meal-planner.css";
import MealPlannerTable from "../components/MealPlannerTable";
import SectionIntro from "../components/SectionIntro";
import tofuSalad from "../images/tofu_salad.png";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MEAL_ROWS = [
    {
        mealType: "Breakfast",
        cells: ["Tofu Salad", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe"]
    },
    {
        mealType: "Lunch",
        cells: ["+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe"]
    },
    {
        mealType: "Dinner",
        cells: ["+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe"]
    },
    {
        mealType: "Supper",
        cells: ["+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe", "+ Add Recipe"]
    }
];

const MealPlanner = () => {
    return (
        <main className="meal-planner-page">
            <div className="wrap">
                <SectionIntro
                    className="planner-hero"
                    title="Weekly Meal Planner"
                    description="Plan meals for the week and preview your shopping workflow."
                    descriptionClassName="planner-subtext"
                />

                <section className="meal-planner-container">
                    <div className="date-selector">
                        <label htmlFor="week-date">Week of:</label>
                        <input id="week-date" className="week-date-input" type="text" value="2026-04-29" readOnly />
                    </div>

                    <MealPlannerTable days={DAYS} mealRows={MEAL_ROWS} mealImage={tofuSalad} />

                    <button className="btn generate-shopping-list" type="button">Generate Shopping List</button>
                </section>
            </div>
        </main>
    );
};

export default MealPlanner;