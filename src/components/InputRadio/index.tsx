import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./styles.module.css";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  title: string;
  error?: boolean;
}

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ id, title, error, ...rest }, ref) => {
    const idTrue = `${id}-true`;
    const idFalse = `${id}-false`;

    return (
      <div className={styles.input}>
        <p className={styles.p}>{title}</p>
        <div>
          <label htmlFor={idTrue} className={styles.label}>
            Sim
          </label>
          <input
            className={styles.inputElement}
            type="radio"
            ref={ref}
            id={idTrue}
            value="true"
            {...rest}
          />
          <label htmlFor={idFalse} className={styles.label}>
            Não
          </label>
          <input
            checked
            className={styles.inputElement}
            type="radio"
            ref={ref}
            id={idFalse}
            value=""
            {...rest}
          />
        </div>
        {error && <span className={styles.error}>Campo obrigatório.</span>}
      </div>
    );
  }
);

export default InputRadio;
