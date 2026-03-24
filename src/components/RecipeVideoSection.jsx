import "../css/RecipeVideoSection.css";

const RecipeVideoSection = () => {
  return (
    <section className="recipe-video-section" aria-labelledby="recipe-video-heading">
      <div className="recipe-video-copy">
        <p className="recipe-video-eyebrow">Nutrition spotlight</p>
        <h2 id="recipe-video-heading">How Food Impacts Your Emotions</h2>
        <p>
          This video is a great overview from the Standford Professor Andrew Huberman on how the nutrients in your meals can impact your brain chemistry and mood.
          It’s a great reminder that the food you eat is more than just fuel for your body - it’s also information for your brain.
        </p>
      </div>

      <div className="recipe-video-frame">
        <iframe
          src="https://www.youtube.com/embed/Q4qWzbP0q7I"
          title="Why balanced meals are important"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default RecipeVideoSection;