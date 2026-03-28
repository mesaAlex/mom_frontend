import { useState } from "react";
import TitledListCard from "./TitledListCard";
import "../css/ContactPreviewCard.css";

const ContactPreviewCard = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "76c3bfa7-dfcf-4a43-bb4e-24dc0c2bd935");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully.");
        event.target.reset();
      } else {
        setResult(data.message || "There was a problem sending your message.");
      }
    } catch {
      setResult("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <TitledListCard
      className="contact-card"
      title="Contact Us"
      note="Feel free to reach out to us with any questions or inquiries. We are here to help and will get back to you as soon as possible."
      noteClassName="contact-note"
    >
      <form className="contact-preview-grid" onSubmit={onSubmit}>
        <input
          className="preview-row contact-input"
          type="text"
          name="name"
          placeholder="Full Name"
          aria-label="Full Name"
          autoComplete="name"
          required
        />
        <input
          className="preview-row contact-input"
          type="email"
          name="email"
          placeholder="Email Address"
          aria-label="Email Address"
          autoComplete="email"
          required
        />
        <input
          className="preview-row contact-input"
          type="text"
          name="subject"
          placeholder="Subject"
          aria-label="Subject"
        />
        <textarea
          className="preview-row preview-message contact-input contact-textarea"
          name="message"
          placeholder="Message"
          aria-label="Message"
          required
        />
        <button
          type="submit"
          className="btn primary contact-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <span className="contact-result" role="status" aria-live="polite">
          {result}
        </span>
      </form>
    </TitledListCard>
  );
};

export default ContactPreviewCard;