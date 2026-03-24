import { Link } from "react-router-dom";
import "../css/RecipeBreadcrumb.css";

const RecipeBreadcrumb = ({ currentLabel }) => {
  return (
    <div className="breadcrumb">
      <div className="wrap">
        <Link to="/recipes">Recipe Library</Link>
        <span> / </span>
        <span>{currentLabel}</span>
      </div>
    </div>
  );
};

export default RecipeBreadcrumb;