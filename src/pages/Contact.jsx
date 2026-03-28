import "../css/Contact.css";
import ContactPreviewCard from "../components/ContactPreviewCard";
import SectionIntro from "../components/SectionIntro";

const CONTACT_HIGHLIGHTS = [
    "Questions about recipes or meal planning",
    "Project feedback and accessibility ideas",
    "Suggestions for new healthy meals"
];

const Contact = () => {
    return (
        <main className="contact-page">
            <div className="wrap contact-layout">
                <SectionIntro
                    className="contact-copy"
                    eyebrow="Get in touch"
                    eyebrowClassName="contact-eyebrow"
                    title="Contact Meals on Mesa"
                    description="Send a message directly from this page for recipe questions, project feedback, or ideas for new healthy meals."
                    descriptionClassName="contact-lead"
                >
                    <ul className="contact-highlights">
                        {CONTACT_HIGHLIGHTS.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </SectionIntro>

                <ContactPreviewCard />
            </div>
        </main>
    );
};

export default Contact;