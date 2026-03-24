import PreviewField from "./PreviewField";
import TitledListCard from "./TitledListCard";
import "../css/ContactPreviewCard.css";

const ContactPreviewCard = () => {
  return (
    <TitledListCard
      className="contact-card"
      title="Message form preview"
      note="Form submission is intentionally disabled for Part 8."
      noteClassName="contact-note"
    >
      <div className="contact-preview-grid">
        <PreviewField className="preview-row" label="Full Name" />
        <PreviewField className="preview-row" label="Email Address" />
        <PreviewField className="preview-row" label="Subject" />
        <PreviewField className="preview-row preview-message" label="Message" />
      </div>
      <button type="button" className="btn primary contact-submit">Send Message</button>
    </TitledListCard>
  );
};

export default ContactPreviewCard;