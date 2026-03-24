import SectionIntro from "../components/SectionIntro";
import ShoppingCategoryGrid from "../components/ShoppingCategoryGrid";
import "../css/Shopping-list.css";

const CATEGORY_GROUPS = [
    [
        { title: "Produce", items: ["Cherry Tomatoes", "Spinach", "Kale", "Garlic"] },
        { title: "Dairy", items: ["Yellow Cheese", "Milk", "Almond Milk"] },
        { title: "Pantry", items: ["Olive Oil", "Vinegar", "Salt", "Pepper"] }
    ],
    [
        { title: "Protein", items: ["Chicken Breast", "Ground Turkey", "Salmon", "Tofu"] },
        { title: "Grains & Carbs", items: ["Brown Rice", "Quinoa", "Oats", "Pasta"] },
        { title: "Frozen", items: ["Frozen Vegetables", "Frozen Fruit", "Frozen Burritos"] }
    ]
];

const ShoppingList = () => {
    return (
        <main className="shopping-list-page">
            <div className="wrap">
                <SectionIntro
                    className="shopping-hero"
                    title="Your Shopping List"
                    description="Find your items easier with our automatic Shopping List"
                    descriptionClassName="shopping-subtext"
                />

                <ShoppingCategoryGrid categoryGroups={CATEGORY_GROUPS} />

                <button className="btn clear-items" type="button">Clear Checked Items</button>
            </div>
        </main>
    );
};

export default ShoppingList;