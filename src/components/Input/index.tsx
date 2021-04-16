import { InputHTMLAttributes, forwardRef } from "react";

import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          className={`${styles.inputElement} ${error ? styles.onError : ""}`}
          ref={ref}
          id={id}
          {...rest}
        />
        {error && <span className={styles.error}>Campo obrigatório.</span>}
      </div>
    );
  }
);

export default Input;
