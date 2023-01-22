import { useFormContext } from "react-hook-form";
import styles from "./InputUseForm.module.css";

interface IInputUserFormProps {
    name: string,
    title?: string,
    aditional?: string
}

const InputUseForm = (props: IInputUserFormProps) => {

    const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={props.name}>{props.title || props.name}</label>
      <input className={styles.InputStyles} type="number" id={props.name} {...register(props.name)} />
      <span>{props.aditional}</span>
    </div>
  );
};

export default InputUseForm;
