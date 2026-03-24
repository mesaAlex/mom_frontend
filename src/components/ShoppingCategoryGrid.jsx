import ShoppingCategory from "./ShoppingCategory";
import "../css/ShoppingCategoryGrid.css";

const ShoppingCategoryGrid = ({ categoryGroups }) => {
  return (
    <section className="shopping-list-container" aria-label="Shopping categories">
      {categoryGroups.map((group, rowIndex) => (
        <div className="shopping-columns" key={`row-${rowIndex}`}>
          {group.map(category => (
            <ShoppingCategory key={category.title} title={category.title} items={category.items} />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ShoppingCategoryGrid;