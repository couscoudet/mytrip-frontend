import FormComponentWithValidation from "../components/Forms/FormComponentWithValidation";
import SubmitButton from "../components/Forms/SubmitButton";
import TextInputWithValidation from "../components/Forms/TextInputWithValidation";
import { emailPattern } from "../services/patterns";
import MainLayout from "./layout/MainLayout";

const FormExample = () => {
  return (
    <MainLayout>
      <FormComponentWithValidation>
        <TextInputWithValidation
          type="text"
          displayedLabel="Nom"
          nameId="fullname"
          required={true}
          pattern={/.{5,}/}
        />

        <TextInputWithValidation
          type="email"
          displayedLabel="E-mail"
          nameId="email"
          required={true}
          pattern={emailPattern}
        />
        <SubmitButton CTA={"valider"} />
      </FormComponentWithValidation>
    </MainLayout>
  );
};

export default FormExample;
