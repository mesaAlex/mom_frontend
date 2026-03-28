import { useEffect, useState } from "react";
import "../css/RecipesSlideshow.css";
import slideOne from "../images/slide_1_meals_on_mesa.png";
import slideTwo from "../images/slide_2_meals_on_mesa.png";
import slideThree from "../images/slide_3_meals_on_mesa.png";

const SLIDES = [
  {
    imageSrc: slideOne,
    alt: "Featured balanced meal prep bowl"
  },
  {
    imageSrc: slideTwo,
    alt: "Fresh ingredients for healthy weekly recipes"
  },
  {
    imageSrc: slideThree,
    alt: "Meals on Mesa recipe inspiration collage"
  }
];

const RecipesSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentSlide(previous => (previous + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide(previous => (previous - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide(previous => (previous + 1) % SLIDES.length);
  };

  return (
    <section className="recipes-slideshow" aria-label="Featured recipe slides">
      <div className="recipes-slides-track" aria-live="polite">
        {SLIDES.map((slide, index) => (
          <img
            key={slide.alt}
            src={slide.imageSrc}
            alt={slide.alt}
            className={`recipes-slide-image${currentSlide === index ? " active" : ""}`}
            aria-hidden={currentSlide !== index}
          />
        ))}
      </div>

      <button
        type="button"
        className="recipes-slide-control recipes-slide-prev"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        Previous
      </button>
      <button
        type="button"
        className="recipes-slide-control recipes-slide-next"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        Next
      </button>

      <div className="recipes-slide-dots" role="tablist" aria-label="Slideshow indicators">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            role="tab"
            aria-selected={currentSlide === index}
            aria-label={`Go to slide ${index + 1}`}
            className={`recipes-slide-dot${currentSlide === index ? " active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipesSlideshow;