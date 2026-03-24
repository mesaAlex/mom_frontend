import PreviewField from "./PreviewField";
import "../css/CreateAccountPreview.css";

const CreateAccountPreview = () => {
  return (
    <section className="signup-container" aria-label="Create account preview">
      <h2 className="form-title">Create an Account</h2>
      <div className="signup-form-preview">
        <PreviewField className="form-group" iconClassName="form-icon" icon="👤" label="Full Name" />
        <PreviewField className="form-group" iconClassName="form-icon" icon="✉" label="Email Address" />
        <PreviewField className="form-group" iconClassName="form-icon" icon="🔒" label="Password" />
        <PreviewField className="form-group" iconClassName="form-icon" icon="🔒" label="Confirm Password" />
        <button type="button" className="btn primary signup-btn">Sign up</button>
      </div>

      <p className="login-text">
        Already have an account? <span className="login-link">Log in preview</span>
      </p>
    </section>
  );
};

export default CreateAccountPreview;