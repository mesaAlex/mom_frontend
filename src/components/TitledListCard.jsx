
import "../css/TitledListCard.css";

const TitledListCard = ({
  className,
  title,
  titleClassName,
  note,
  noteClassName,
  items,
  listClassName,
  children
}) => {
  return (
    <section className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {note ? <p className={noteClassName}>{note}</p> : null}
      {items ? (
        <ul className={listClassName}>
          {items.map(item => (
            <li key={`${title}-${item}`}>{item}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </section>
  );
};

export default TitledListCard;