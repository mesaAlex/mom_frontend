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
                    description="Contact form functionality is coming in the next part. For now, this page keeps your complete responsive layout and content structure."
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