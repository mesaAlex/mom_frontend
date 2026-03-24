import "../css/ShoppingCategory.css";

const ShoppingCategory = ({ title, items }) => {
  return (
    <section className="shopping-category">
      <h3>{title}</h3>
      <ul className="shopping-items">
        {items.map((item, index) => {
          const id = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`;

          return (
            <li key={`${title}-${item}`}>
              <input type="checkbox" id={id} />
              <label htmlFor={id}>{item}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShoppingCategory;