import "../css/PreviewField.css";

const PreviewField = ({ className, icon, iconClassName, label }) => {
  return (
    <div className={className}>
      {icon ? <span className={iconClassName}>{icon}</span> : null}
      <span>{label}</span>
    </div>
  );
};

export default PreviewField;