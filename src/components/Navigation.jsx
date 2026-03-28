import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMenuTimerRef = useRef(null);

    const clearCloseTimer = () => {
        if (closeMenuTimerRef.current !== null) {
            window.clearTimeout(closeMenuTimerRef.current);
            closeMenuTimerRef.current = null;
        }
    };

    const openMobileMenu = () => {
        clearCloseTimer();
        setIsMobileMenuOpen(true);
    };

    const closeMobileMenu = () => {
        clearCloseTimer();
        setIsMobileMenuOpen(false);
    };

    const scheduleCloseMobileMenu = () => {
        clearCloseTimer();
        closeMenuTimerRef.current = window.setTimeout(() => {
            setIsMobileMenuOpen(false);
            closeMenuTimerRef.current = null;
        }, 180);
    };

    const navLinkClassName = ({ isActive }) => (isActive ? "active" : "");

    return (
        <div className="navigation">
            <div className="nav-cta">
                <nav className="main-nav" aria-label="Main navigation">
                <NavLink to="/" end className={navLinkClassName}>Home</NavLink>
                <NavLink to="/recipes" className={navLinkClassName}>Recipes</NavLink>
                <NavLink to="/meal-planner" className={navLinkClassName}>Meal Planner</NavLink>
                <NavLink to="/shopping-list" className={navLinkClassName}>Shopping List</NavLink>
                <NavLink to="/contact" className={navLinkClassName}>Contact</NavLink>
                </nav>

                <div className="cta">
                <Link to="/create-account" className="btn primary">Create an Account</Link>
                </div>
            </div>

            <div
                className="mobile-nav-container"
                onMouseEnter={openMobileMenu}
                onMouseLeave={scheduleCloseMobileMenu}
            >
                <button
                    className="mobile-nav-toggle"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-nav-menu"
                    onFocus={openMobileMenu}
                    onBlur={scheduleCloseMobileMenu}
                    onClick={() => setIsMobileMenuOpen(previous => !previous)}
                >
                    ☰
                </button>
                <nav
                    id="mobile-nav-menu"
                    className={`mobile-nav${isMobileMenuOpen ? " open" : ""}`}
                    aria-label="Mobile navigation"
                    onMouseEnter={openMobileMenu}
                    onMouseLeave={scheduleCloseMobileMenu}
                >
                    <NavLink to="/" end className={navLinkClassName} onClick={closeMobileMenu}>Home</NavLink>
                    <NavLink to="/recipes" className={navLinkClassName} onClick={closeMobileMenu}>Recipes</NavLink>
                    <NavLink to="/meal-planner" className={navLinkClassName} onClick={closeMobileMenu}>Meal Planner</NavLink>
                    <NavLink to="/shopping-list" className={navLinkClassName} onClick={closeMobileMenu}>Shopping List</NavLink>
                    <NavLink to="/contact" className={navLinkClassName} onClick={closeMobileMenu}>Contact</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;