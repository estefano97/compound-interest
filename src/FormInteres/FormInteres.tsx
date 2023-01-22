import { useForm, FormProvider } from "react-hook-form";
import { IFormInteres } from "./IFormInteres";
import InputUseForm from "../shared/components/InputUseForm";
import styles from "./FormInteres.module.css";

interface IFormInteresProps {
  setFormInteresState: (data: IFormInteres) => void;
}

const FormInteres = (props: IFormInteresProps) => {
  const FormInteres = useForm<IFormInteres>({defaultValues: {
    anualAddition: 5000,
    anualInterest: 10,
    initialValue: 0,
    years: 10
  }});

  const OnSubmitFormInteres = (e: IFormInteres) => { 
    props.setFormInteresState(e);
  }

  return (
    <div>
      <FormProvider {...FormInteres}>
        <form onSubmit={FormInteres.handleSubmit(OnSubmitFormInteres)}>
        <div className={styles.FormStyle}>
          <InputUseForm name="years" title="Anios de inversion" />
          <InputUseForm name="initialValue" title="Valor inicial" />
          <InputUseForm name="anualAddition" title="Adicion anual" />
          <InputUseForm name="anualInterest" title="Interes Anual" />
          <input
            className={styles.submitButton}
            type="submit"
            value="CALCULAR"
          />
        </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default FormInteres;
