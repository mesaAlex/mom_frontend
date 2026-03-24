import "../css/About.css";
import SectionIntro from "../components/SectionIntro";
import TitledListCard from "../components/TitledListCard";

const ABOUT_ITEMS = [
    "All major pages from the original project",
    "Component-based recipe and shopping list items",
    "Responsive navigation and vertical small-screen menu",
    "Page-specific and component-specific stylesheet organization"
];

const About = () => {
    return (
        <main className="about-page">
            <div className="wrap about-layout">
                <SectionIntro
                    eyebrow="Project Part 8"
                    eyebrowClassName="about-eyebrow"
                    title="About Meals on Mesa"
                    description="This React version recreates your project site with reusable components and responsive page layouts."
                />

                <TitledListCard className="about-card" title="Included in this build" items={ABOUT_ITEMS} />
            </div>
        </main>
    );
};

export default About;