import "../css/FeatureCard.css";

const FeatureCard = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <article className="feature-card">
      <img src={imageSrc} alt={imageAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default FeatureCard;