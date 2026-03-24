import "../css/SectionIntro.css";

const SectionIntro = ({
  className,
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  beforeContent,
  titleTag: TitleTag = "h1",
  children
}) => {
  return (
    <section className={className}>
      {beforeContent}
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      <TitleTag className={titleClassName}>{title}</TitleTag>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
      {children}
    </section>
  );
};

export default SectionIntro;