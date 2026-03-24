import FeatureCard from "./FeatureCard";
import "../css/FeaturesSection.css";

const FeaturesSection = ({ features }) => {
  return (
    <section className="features">
      <div className="wrap features-inner">
        {features.map((feature, index) => (
          <div className="feature-slot" key={feature.title}>
            <FeatureCard {...feature} />
            {index < features.length - 1 ? <div className="feature-divider" aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;