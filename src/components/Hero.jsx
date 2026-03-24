import {Link} from 'react-router-dom';
import "../css/Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="wrap hero-inner">
                <h1>Meals on Mesa</h1>
                <p className="lead">Track your meals. Understand your nutrition. Plan with intention.</p>
                <Link className="btn primary" to="/create-account">Create an Account</Link>
            </div>
        </section>
    );
};

export default Hero;