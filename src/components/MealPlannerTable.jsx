import "../css/MealPlannerTable.css";

const MealPlannerTable = ({ days, mealRows, mealImage }) => {
  return (
    <div className="meal-table-wrapper">
      <table className="meal-table" aria-label="Weekly meal planning table">
        <thead>
          <tr>
            <th>Meal</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mealRows.map(row => (
            <tr key={row.mealType}>
              <th>{row.mealType}</th>
              {row.cells.map((cell, index) => (
                <td key={`${row.mealType}-${days[index]}`} className={`meal-cell${cell.startsWith("+") ? " empty" : ""}`}>
                  {cell.startsWith("+") ? (
                    <span>{cell}</span>
                  ) : (
                    <div className="meal-item">
                      <img src={mealImage} alt={cell} />
                      <p>{cell}</p>
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MealPlannerTable;