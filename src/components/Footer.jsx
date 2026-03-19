import {Link} from "react-router-dom";
import "../css/Footer.css";
import MOM_LOGO from "../images/MOM_LOGO 2.png"


const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="wrap footer-inner">
                <div className="brand_small small">
                    <img src={MOM_LOGO} alt="Meals on Mesa" />
                    <p>Meals on Mesa</p>
                </div>
                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <span className="separator">|</span>
                    <Link to="/recipes">Recipes</Link>
                    <span className="separator">|</span>
                    <Link to="/meal-planner">Meal Planner</Link>
                    <span className="separator">|</span>
                    <Link to="/shopping-list">Shopping List</Link>
                    <span className="separator">|</span>
                    <Link to="/contact">Contact</Link>
                </nav>
                <div className="copyright">© 2026 Meals on Mesa. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;