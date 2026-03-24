import "../css/Create-account.css";
import CreateAccountPreview from "../components/CreateAccountPreview";
import SectionIntro from "../components/SectionIntro";

const CreateAccount = () => {
    return (
        <main className="create-account-page">
            <SectionIntro
                className="centered"
                beforeContent={<div className="signup-icon">♥</div>}
                title="Create an Account"
                description="Join MOM and start planning your healthy meals today."
                descriptionClassName="signup-subtext"
            />

            <CreateAccountPreview />
        </main>
    );
};

export default CreateAccount;