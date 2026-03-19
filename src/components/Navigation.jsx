import {Link} from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="nav-cta">
                <nav className="main-nav" aria-label="Main navigation">
                <Link to="/" className="active">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/meal-planner">Meal Planner</Link>
                <Link to="/shopping-list">Shopping List</Link>
                <Link to="/contact">Contact</Link>
                </nav>

                <div className="cta">
                <Link to="/create-account" className="btn primary">Create an Account</Link>
                </div>
            </div>

            <button className="mobile-nav-toggle" aria-label="Toggle navigation menu">☰</button>
            <nav className="mobile-nav" aria-label="Mobile navigation">
                <Link to="/" className="active">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/meal-planner">Meal Planner</Link>
                <Link to="/shopping-list">Shopping List</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navigation;