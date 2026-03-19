import {Link} from "react-router-dom";
import "../css/Header.css";
import Navigation from "./Navigation";
import MOM_LOGO from "../images/MOM_LOGO.png";

const Header = () => {
    return (
        <header id="main-header" className="site-header">
            <Link to="/" className="brand">
                <img src={MOM_LOGO} alt="Meals on Mesa" />
                <span className="brand-text">Meals on Mesa</span>
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;